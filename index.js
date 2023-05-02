const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.Port || 5000;

const categories = require("./data/categories.json");
const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("hello world");
});

// loading all categories
app.get("/categories", (req, res) => {
  res.send(categories);
});

// loading single category
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedCategory = chefs.find((c) => parseInt(c.category_id) === id);
  res.send(selectedCategory);
});

// loading all chefs
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

// loading single chef
app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chefs.find((c) => parseInt(c.id) === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log("Server is running on port : ", port);
});
