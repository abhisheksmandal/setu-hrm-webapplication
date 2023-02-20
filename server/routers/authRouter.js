const express = require("express");
const router = express.Router();
const pool = require("../DatabaseConnection");
// const phash = require("../PasswordHashing");

let fname;
let lname;q 
let compName;
let panno;
let address;
let emailid;
let genOtp;
let emailer = require("../EmailOtp");
let otp = require("../OTPGenerator");

router.post("/reg1", async (req, res) => {
  fname = req.body.fname;
  console.log(`First Name recieved: ${fname}`);
  lname = req.body.lname;
  console.log(`Last Name recieved: ${lname}`);
  compName = req.body.companyname;
  console.log(`Company Name recieved: ${compName}`);
  panno = req.body.panno;
  console.log(`Pan No recieved: ${panno}`);
  address = req.body.address;
  console.log(`Address recieved: ${address}`);
  emailid = req.body.emailid;
  console.log(`Email ID recieved: ${emailid}`);
  genOtp = otp.generateOTP();
  console.log(`Otp generated: ${genOtp}`);
  pool.query(
    `SELECT public.otp_save(
      '${emailid}', 
      '${genOtp}', 
      '127.0.0.1'
    )`,
    (err, res) => {
      console.log(err, res);
      // pool.end();
    }
  );
  emailer.sendOTPMail(emailid, genOtp);
});

router.post("/reg2", async (req, res) => {
  let otpcode = req.body.otpcode;
  console.log(`OTP recieved: ${otpcode}`);
  let password = req.body.password;
  console.log(`Password recieved: ${password}`);
  pool.query(
    `SELECT insert_regdata('${emailid}', '${compemailid}', '${fname}', '${lname}', '${compName}', '${panno}', '${address}', '${emailid}')`,
    (err, res) => {
      console.log(err, res);
      // pool.end();
    } 
  );
});

module.exports = router;
