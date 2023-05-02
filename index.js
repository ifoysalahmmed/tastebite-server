const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.Port || 5000;

const categories = require("./data/categories.json");

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

app.listen(port, () => {
  console.log("Server is running on port : ", port);
});
