const express = require("express");
const morgan = require("morgan");
const { getAllMovies, getMovieById } = require("./database/controllers");

const app = express();

// middleware goes here
app.use(morgan("tiny"));

// routes or router could go here

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/movies", (req, res) => {
  // db.query("SELECT * FROM movies;"); // how you do it with PG
  getAllMovies()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(404).json({ message: "No movies found matching this search!" })
    );
});
app.get("/movies/:id", (req, res) => {
  let { id } = req.params;
  getMovieById(id)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(404).json({ message: "No movie found matching this search!" })
    );
});

module.exports = app;
