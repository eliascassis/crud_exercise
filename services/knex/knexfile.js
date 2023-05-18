const path = require("path");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  dockerLocal: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "postgres",
      database: "order",
      port: 5432,
    },
    pool: {
      min: 0,
      max: 40,
      acquireTimeoutMillis: 60000,
      idleTimeoutMillis: 600000,
    },
    migrations: {
      directory: path.join(__dirname, "migrations"),
    },
  },
};
