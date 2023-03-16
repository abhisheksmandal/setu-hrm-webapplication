const express = require("express");
const router = express.Router();
const pool = require("../DatabaseConnection");
// const phash = require("../PasswordHashing");

let fname;
let lname;
let compName;
let panno;
let address;
let emailid;
let genOtp;
let emailer = require("../EmailOtp");
let otp = require("../OTPGenerator");
let myVar = { data: "" };

router.post("/reg1", async (req, res) => {
  fname = req.body.fname;
  console.log(`First Name received: ${fname}`);
  lname = req.body.lname;
  console.log(`Last Name received: ${lname}`);
  compName = req.body.companyname;
  console.log(`Company Name received: ${compName}`);
  panno = req.body.panno;
  console.log(`Pan No received: ${panno}`);
  address = req.body.address;
  console.log(`Address received: ${address}`);
  emailid = req.body.emailid;
  console.log(`Email ID received: ${emailid}`);
  genOtp = otp.generateOTP();
  console.log(`OTP generated: ${genOtp}`);

  try {
    const result = await pool.query(
      `SELECT public.otp_save(
        '${emailid}', 
        '${genOtp}', 
        '127.0.0.1'
      )`
    );

    const otpSaveResult = result.rows[0].otp_save;
    console.log(otpSaveResult);

    res.json(otpSaveResult);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }

  emailer.sendOTPMail(emailid, genOtp);
});

router.post("/reg2", async (req, res) => {
  let otpcode = req.body.otpcode;
  console.log(`OTP recieved: ${otpcode}`);
  let password = req.body.password;
  console.log(`Password recieved: ${password}`);
  // pool.query(
  //   `SELECT insert_regdata('${emailid}', '${compemailid}', '${fname}', '${lname}', '${compName}', '${panno}', '${address}', '${emailid}')`,
  //   (err, res) => {
  //     console.log(err, res);
  //     // pool.end();
  //   }
  // );

  try {
    const result = await pool.query(
      `SELECT public.otp_validate(
        '${emailid}', 
        '${otpcode}'
      )`
    );

    const validateMessage = result.rows[0].otp_validate;
    console.log(result);

    res.json(validateMessage);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
