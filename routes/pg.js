"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/user", function (request, reply) {
    fastify.pg.query(
      'SELECT id, name, email FROM "user"',
      function onResult(err, result) {
        reply.send(err || result.rows);
      }
    );
  });

  fastify.post("/user", (request, reply) => {
    fastify.pg.query(
      `INSERT INTO "user" (id, name, email, password) VALUES('389f158a-ffb1-43c6-9ed6-ee9eae004394', '${request.body.name}', '${request.body.email}', '${request.body.password}') RETURNING *`,
      function onResult(err, result) {
        reply.send(err || result);
      }
    );
  });
};
