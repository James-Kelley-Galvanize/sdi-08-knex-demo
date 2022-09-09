/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("posters", (table) => {
    table.increments("id"); // id
    table.string("url");
    table.integer("movie_id").references("id").inTable("movies"); // FK CONSTRAINT
    table.timestamps(true, true); // created_at updated_at
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("posters");
};
