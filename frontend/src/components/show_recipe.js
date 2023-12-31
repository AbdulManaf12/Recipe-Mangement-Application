import React, { useEffect, useState } from "react";

export default function ShowRecipe() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {recipe.length === 0 ? (
        <div>No recipe data available.</div>
      ) : (
        recipe.map((recipe) => (
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
