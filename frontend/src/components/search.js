import React, { useEffect, useState } from "react";

export default function Search() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("/get_data")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`/recipe/${id}/delete`, { method: "POST" })
      .then((res) => res.text())
      .then(() => {
        // Refresh the recipe list after deletion
        fetch("/get_data")
          .then((res) => res.json())
          .then((data) => {
            setRecipe(data);
          });
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });
  };

  const handleSearch = () => {
    const results = recipe.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="center">
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search by recipe name"
        />
        <button onClick={handleSearch} className="btn btn-success">
          Search
        </button>
      </div>
      {searchResults.length === 0 ? (
        <div>
          No search results.<br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      ) : (
        searchResults.map((recipe) => (
          <div
            className="border border-success m-5 p-5 bg-info"
            key={recipe._id}
          >
            <img src={recipe.imageUrl} alt="recipe" width={150} />
            <h4>Name: {recipe.title}</h4>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Price: {recipe.price}</p>
            <button
              className="btn btn-primary"
              onClick={() =>
                (window.location.href = `/recipe/${recipe._id}/edit`)
              }
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(recipe._id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
