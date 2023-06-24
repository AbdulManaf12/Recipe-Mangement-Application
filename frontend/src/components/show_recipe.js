import React, { useEffect, useState } from "react";

export default function ShowRecipe() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("/get_data")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      });
  }, []);

  return (
    <div>
      {typeof recipe == "undefined" ? (
        <div>loading...</div>
      ) : (
        recipe.map((recipe) => (
          <div className="border border-success m-5 p-5 bg-info">
            <img src={recipe.imageUrl} alt="recipe" width={150} />
            <h4>Name: {recipe.title}</h4>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Price: {recipe.price}</p>
            <forms action={"/recipe/" + recipe._id + "/edit"} method="POST">
              <input type="submit" value="Edit" className="btn btn-primary" />
            </forms>
            <forms action={"/recipe/" + recipe._id + "/delete"} method="POST">
              <input type="submit" value="Delete" className="btn btn-danger" />
            </forms>
          </div>
        ))
      )}
    </div>
  );
}
