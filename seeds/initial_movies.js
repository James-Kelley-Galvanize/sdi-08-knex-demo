/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movies").del();
  await knex("movies").insert([
    {
      id: 1,
      title: "The Seven Samurai",
      genre: "Period Drama",
      release_date: "1954-04-26",
    },
    {
      id: 2,
      title: "The Land Before Time",
      genre: "Period Drama",
      release_date: "1987-11-18",
    },
    {
      id: 3,
      title: "REPO! The Genetic Opera",
      genre: "Musical",
      release_date: "2008-11-07",
    },
  ]);
};
