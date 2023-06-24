import React from "react";
import ShowRecipe from "./components/show_recipe";
import AddRecipe from "./components/AddRecipe";
import Search from "./components/search";

function App() {
  return (
    <div>
      <h1 className="text-center">Recipes</h1>
      <h3>Add New Recipe</h3>
      <AddRecipe />
      <h3>Display All Recipe</h3>
      <ShowRecipe />
      <h3>Search Recipe</h3>
      <Search />
    </div>
  );
}

export default App;
