const express = require("express");
const router = express.Router();
const pool = require("../DatabaseConnection");
// const phash = require("../PasswordHashing");
const emailer = require("../EmailOtp");
const otp = require("../OTPGenerator");

router.post("/reg1", async (req, res) => {
  let fname = req.body.fname;
  console.log(`First Name recieved: ${fname}`);
  let lname = req.body.lname;
  console.log(`Last Name recieved: ${lname}`);
  let compName = req.body.companyname;
  console.log(`Company Name recieved: ${compName}`);
  let panno = req.body.panno;
  console.log(`Pan No recieved: ${panno}`);
  let address = req.body.address;
  console.log(`Address recieved: ${address}`);
  let emailid = req.body.emailid;
  console.log(`Email ID recieved: ${emailid}`);
  let genOtp = otp.generateOTP();
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
  // pool.query(
  //   `SELECT public.otp_save(
  //     '${emailid}',
  //     '${genOtp}',
  //     '127.0.0.1'
  //   )`,
  //   (err, res) => {
  //     console.log(err, res);
  //     // pool.end();
  //   }
  // );
  // emailer.sendOTPMail(emailid, genOtp);
});

module.exports = router;
