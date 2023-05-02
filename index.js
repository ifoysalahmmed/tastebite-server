const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.Port || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

// loading all chefs
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log("Server is running on port : ", port);
});
