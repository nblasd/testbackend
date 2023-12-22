const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.listen(port, () => {
  console.log(`app is running at port:${port}`);
});
