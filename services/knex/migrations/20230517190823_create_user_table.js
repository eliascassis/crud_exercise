/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.uuid("id").primary().notNullable();
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("phone", 255);
    table.string("password", 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
