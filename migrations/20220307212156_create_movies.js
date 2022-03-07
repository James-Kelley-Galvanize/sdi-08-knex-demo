/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movies", (table) => {
    table.increments("id"); // id
    table.string("title").notNullable(); // title
    table.string("genre"); // genre
    table.date("release_date"); // release date
    table.timestamps(true, true); // created_at updated_at
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("movies");
};
