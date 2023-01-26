const { Pool } = require("pg");

const pool = new Pool({
  database: "setuhrmwebapp",
  host: "localhost",
  password: "$tar",
  user: "postgres",
  port: "5432",
});

module.exports = pool;
