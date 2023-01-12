// function generateOTP() {
//   // Declare a digits variable
//   // which stores all digits
//   var digits = "0123456789";
//   let OTP = "";
//   for (let i = 0; i < 6; i++) {
//     OTP += digits[Math.floor(Math.random() * 10)];
//   }
//   return OTP;
// }

const otp = require('./OTPGenerator');

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
  to: "abhishek.s.mandal@gmail.com ",
  subject: "Sending Email using Node.js",
  text: `Hello, The One Time Password for your Registration is ${otp.generateOTP()}. This OTP will expire in 30 minutes. Thank you`,
};

function sendOTPMail() {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

sendOTPMail();
// export default sendOTPMail;