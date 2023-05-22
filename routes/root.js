"use strict";

module.exports = async function (fastify, opts) {
  fastify.post("/auth", async (request, reply) => {
    const token = fastify.jwt.sign({
      email: request.body.email,
      password: request.body.password,
    });
    reply.send({ token });
  });
};
