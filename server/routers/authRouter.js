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
  console.log(`OTP received: ${otpcode}`);
  let password = req.body.password;
  console.log(`Password received: ${password}`);

  try {
    const otpResult = await pool.query(
      `SELECT public.otp_validate(
        '${emailid}', 
        '${otpcode}'
      )`
    );

    const validateMessage = otpResult.rows[0].otp_validate;
    console.log(otpResult);

    const loginResult = await pool.query(
      `SELECT public.login_save(
        '${fname}', 
        '${lname}', 
        '${emailid}', 
        '${password}', 
        '${panno}', 
        '${compName}', 
        '${address}', 
        '127.0.0.1'
      )`
    );

    const loginMessage = loginResult.rows[0].login_save;
    console.log(loginResult);

    res.json({ validateMessage, loginMessage });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

router.post("/login", async (req, res) => {
  let loginEmail = req.body.loginEmail;
  console.log(`ID received: ${loginEmail}`);
  let loginPass = req.body.loginPass;
  console.log(`password received: ${loginPass}`);

  try {
    const loginResult = await pool.query(
      `SELECT public.login_validate(
        '${loginEmail}', 
        '${loginPass}'
      )`
    );

    const loginMessage = loginResult.rows[0].login_validate;
    console.log(loginResult);
    console.log("Recieved from DB " + loginMessage);

    res.json({ loginMessage });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

router.post("/projcreate", async (req, res) => {
  let projectname = req.body.projectname;
  console.log(`Project Name received: ${projectname}`);
  let projecttype = req.body.projecttype;
  console.log(`Project Type received: ${projecttype}`);
  let projectstartDate = req.body.projectstartDate;
  console.log(`Project Start Date received: ${projectstartDate}`);
  let projectendDate = req.body.projectendDate;
  console.log(`Project End Date received: ${projectendDate}`);
  let projectdescription = req.body.projectdescription;
  console.log(`Project Description received: ${projectdescription}`);
  let projectbudget = req.body.projectbudget;
  console.log(`Project Budget received: ${projectbudget}`);
  let projectbillable = req.body.projectbillable;
  console.log(`Project Billable received: ${projectbillable}`);
  let projectmanager = req.body.projectmanager;
  console.log(`Project Manager received: ${projectmanager}`);
  let projectstatus = req.body.projectstatus;
  console.log(`Project Status received: ${projectstatus}`);

  try {
    const pcCreate = await pool.query(
      `SELECT public.project_create(
        '${projectname}',
        '${projecttype}',
        '${projectstartDate}',
        '${projectendDate}',
        '${projectdescription}',
        '${projectbudget}',
        '${projectbillable}',
        '${projectmanager}',
        '${projectstatus}'
    );`
      // `SELECT public.project_create(
      //   '${loginEmail}',
      //   '${loginPass}'
      // )`
    );

    const projectCreate = pcCreate.rows[0].project_create;
    console.log(pcCreate);

    res.json({ projectCreate });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
