"use strict";

const fp = require("fastify-plugin");

module.exports = fp(function (fastify, opts, done) {
  fastify.decorate(
    "selectUserIdByNameAndPassword",
    async function (name, password) {
      const result = await fastify.pg.query(
        `SELECT id FROM "user" WHERE name = '${name}' AND password = '${password}'`
      );
      return result.rows[0].id;
    }
  );
  done();
});
