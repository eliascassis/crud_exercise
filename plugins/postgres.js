"use strict";

const fp = require("fastify-plugin");

module.exports = fp(function (fastify, opts, done) {
  fastify.register(require("@fastify/postgres"), {
    connectionString: "postgres://postgres:postgres@localhost:5432/order",
  });
  done();
});
