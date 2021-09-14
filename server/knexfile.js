require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "capstone",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};