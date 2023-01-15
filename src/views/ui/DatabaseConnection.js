const { Pool, Client } = require("pg");

const connetCon = "postgressql://postgres:$tar@localhost:5432/setuhrmwebapp";

const client = new Client({
  connectionString: connetCon,
});

if (client.connect()) {
  console.log("Successfull");
}

client.query(
  `SELECT * FROM public.otp_tbl
ORDER BY otp_emailid ASC, otp_srno ASC `,
  (err, res) => {
    console.log(err, res);
    client.end();
  }
);
