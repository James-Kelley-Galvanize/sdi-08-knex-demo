const express = require("express");

const app = express();

// routes could go here

app.get("/", (req, res) => {
  res.send("hello world!");
});

module.exports = app;
