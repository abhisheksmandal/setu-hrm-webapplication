const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "$tar",
  database: "setuhrmwebapp",
});

client.connect();

client.query(`select * from otp_tbl`, (err, res) => {
  if (err) {
    console.log(err.rows);
  } else {
    console.log(err.message);
  }

  client.end();
});
