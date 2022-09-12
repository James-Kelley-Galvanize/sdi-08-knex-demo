const knex = require("./dbConnection");

function getAllMovies() {
  return knex.select("*").from("movies");
}
function getMovieById(id) {
  return knex("movies").where({ id }).select();
}

module.exports = { getAllMovies, getMovieById };
