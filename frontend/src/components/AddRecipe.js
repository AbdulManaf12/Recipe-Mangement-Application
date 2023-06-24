import React, { useState } from "react";

export default function AddRecipe() {
  const [formValues, setFormValues] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    price: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form
      // You can perform further actions here, such as making an API request
      console.log("Form submitted:", formValues);
      // Reset the form
      setFormValues({
        title: "",
        ingredients: "",
        instructions: "",
        price: "",
        imageUrl: "",
      });
    }
  };

  const validateForm = (values) => {
    let errors = {};

    if (!values.title.trim()) {
      errors.title = "Title is required";
    }

    if (!values.ingredients.trim()) {
      errors.ingredients = "Ingredients are required";
    }

    if (!values.instructions.trim()) {
      errors.instructions = "Instructions are required";
    }

    if (!values.price.trim()) {
      errors.price = "Price is required";
    } else if (isNaN(values.price)) {
      errors.price = "Price must be a number";
    }
    if (!values.imageUrl.trim()) {
      errors.imageUrl = "Image URL is required";
    }

    return errors;
  };

  return (
    <div>
      <form action="/add-recipe" method="POST" onSubmit={handleSubmit}>
        <div className="form-group w-50 center">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            required
          />
          {errors.title && <div className="error">{errors.title}</div>}

          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="text"
            className="form-control"
            id="ingredients"
            name="ingredients"
            value={formValues.ingredients}
            onChange={handleChange}
            required
          />
          {errors.ingredients && (
            <div className="error">{errors.ingredients}</div>
          )}

          <label htmlFor="instructions">Instructions</label>
          <input
            type="text"
            className="form-control"
            id="instructions"
            name="instructions"
            value={formValues.instructions}
            onChange={handleChange}
            required
          />
          {errors.instructions && (
            <div className="error">{errors.instructions}</div>
          )}

          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            required
          />
          {errors.price && <div className="error">{errors.price}</div>}

          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={formValues.imageUrl}
            onChange={handleChange}
            required
          />
          {errors.imageUrl && <div className="error">{errors.imageUrl}</div>}

          <br />
          <input type="submit" value="Add Recipe" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
