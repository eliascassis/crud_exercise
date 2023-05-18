const fastify = require("fastify")({
  logger: true,
});

fastify.register(require("@fastify/postgres"), {
  connectionString: "postgres://postgres:postgres@localhost:5432/order",
});

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

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
