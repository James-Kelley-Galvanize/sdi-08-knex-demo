/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posters").del();
  await knex("posters").insert([
    { id: 1, movie_id: 1, url: "rowValue1" },
    { id: 2, movie_id: 2, url: "rowValue2" },
    { id: 3, movie_id: 3, url: "rowValue3" },
  ]);
};
