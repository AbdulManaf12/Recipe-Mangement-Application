import React from "react";

export default function AddRecipe() {
  return (
    <div>
      <form action="/add-recipe" method="POST">
        <div className="form-group w-50 center">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title" />

          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            name="ingredients"
          />

          <label htmlFor="instructions">Instructions</label>
          <input
            type="text"
            className="form-control"
            id="instructions"
            name="instructions"
          />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
          />

          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
          />
          <br></br>
          <input type="submit" value="Add Recipe" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
