// const { Client } = require("pg");

// const connectionStr =
//   "postgressql://postgres:$tar@localhost:5432/setuhrmwebapp";

// const client = new Client({
//   connectionString: connectionStr,
// });

// client.connect();
// client.query(
//   `SELECT public.otp_save(
//     'qer7@abc.com',
//     '284781',
//     '127.0.0.1'
//   )`,
//   (err, res) => {
//     console.log(err, res);
//     client.end();
//   }
// );

const { Pool } = require("pg");

const pool = new Pool({
  database: "setuhrmwebapp",
  host: "localhost",
  password: "$tar",
  user: "postgres",
  port: "5432",
});

module.exports = pool;
