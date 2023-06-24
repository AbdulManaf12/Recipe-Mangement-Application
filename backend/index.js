const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/", {
    dbName: "RecipeManagementSystem",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/get_data", async (req, res) => {
  const result = await Recipe.find();
  res.json(result);
});

app.get("/get_data/:id", async (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
