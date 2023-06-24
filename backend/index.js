const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");

mongoose
  .connect("mongodb://127.0.0.1:27017", {
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

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/get_data", async (req, res) => {
  const result = await Recipe.find({});
  res.json(result);
});

app.post("/add-recipe/", (req, res) => {
  Recipe.insertMany(req.body);
  console.log(req.body);
  res.send("Data saved successfully.");
});

app.post("/recipe/:id/delete", async (req, res) => {
  Recipe.deleteOne({ _id: req.params.id });
  res.send("Data deleted successfully.");
});

app.post("/recipe/:id/edit", async (req, res) => {
  Recipe.updateOne({ _id: req.params.id }, req.body);
  res.send("Data updated successfully.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
