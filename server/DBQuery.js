const pool = require("./DatabaseConnection");

pool.query(
  `SELECT public.otp_save(
    'hrm@gb.com', 
    '82641', 
    '127.0.0.1'
  )`,
  (err, res) => {
    console.log(err, res);
    pool.end();
  }
);
