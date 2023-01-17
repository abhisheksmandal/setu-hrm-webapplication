const pool = require("./DatabaseConnection");

pool.query(
  `SELECT public.otp_save(
    'gfi@xyz.com', 
    '672536', 
    '127.0.0.1'
  )`,
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);
