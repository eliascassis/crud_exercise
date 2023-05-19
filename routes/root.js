"use strict";

module.exports = async function (fastify, opts) {
  fastify.post("/auth", async (request, reply) => {
    const userId = await fastify.selectUserIdByNameAndPassword(
      request.body.name,
      request.body.password
    );
    const token = fastify.jwt.sign({
      userId: userId,
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
