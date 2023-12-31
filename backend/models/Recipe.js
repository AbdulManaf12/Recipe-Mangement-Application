const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("recipes", recipeSchema);

