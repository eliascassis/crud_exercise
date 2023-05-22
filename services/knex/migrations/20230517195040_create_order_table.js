/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("order", function (table) {
    table.increments("id").primary().notNullable();
    table.uuid("user_id").notNullable();
    table.foreign("user_id").references("user.id");
    table.string("item", 255).notNullable();
    table.float("price", 255).notNullable();
    table.string("description", 255);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("order");
};
