import React from "react";
import NavBar from "./components/navBar";
import ShowRecipe from "./components/show_recipe";

function App() {
  return (
    <div>
      <NavBar />
      <h1>Recipes</h1>
      <ShowRecipe />
    </div>
  );
}

export default App;
