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
  to: "hemantmhalsekar1@gmail.com ",
  subject: "Sending Email using Node.js",
  text: "Hey, Hemant! Your account has been hacked!!! (Has been generated through the Node.js Program 😏)",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
