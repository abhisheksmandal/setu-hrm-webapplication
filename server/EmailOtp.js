const otp = require("./OTPGenerator");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "setuhrmwebapp@gmail.com",
    pass: "nvdpmsssjxwkwwfk",
  },
});

var mailOptions = {
  from: "setuhrmwebapp@gmail.com",
  to: "",
  subject: "Sending Email using Node.js",
  text: `Hello, The One Time Password for your Registration is ${otp.generateOTP()}. This OTP will expire in 30 minutes. Thank you`,
};

function sendOTPMail(recieverid) {
  mailOptions["to"] = recieverid;
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

// sendOTPMail("suniljoshi1013@gmail.com");

module.exports = { sendOTPMail }
