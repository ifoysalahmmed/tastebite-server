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

app.listen(port, () => {
  console.log("Server is running on port : ", port);
});
