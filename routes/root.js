"use strict";

module.exports = async function (fastify, opts) {
  fastify.post("/auth", (request, reply) => {
    const token = fastify.jwt.sign({
      name: request.body.name,
      password: request.body.password,
    });
    reply.send({ token });
  });
  fastify.get(
    "/protected",
    { onRequest: [fastify.authenticate] },
    async function (request, reply) {
      return request.user;
    }
  );
};
