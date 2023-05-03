const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.Port || 5000;

const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("hello world");
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
