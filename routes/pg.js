"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/user", function (request, reply) {
    fastify.pg.query('SELECT * FROM "user"', function onResult(err, result) {
      reply.send(err || result.rows);
    });
  });

  fastify.post("/user", (request, reply) => {
    fastify.pg.query(
      `INSERT INTO "user" (id, name, email, password) VALUES('${request.body.id}', '${request.body.name}', '${request.body.email}', '${request.body.password}') RETURNING name, email, phone`,
      function onResult(err, result) {
        reply.send(err || result.rows);
      }
    );
  });
};
