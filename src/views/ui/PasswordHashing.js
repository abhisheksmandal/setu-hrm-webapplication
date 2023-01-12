import sendOTPMail from "../../backend/EmailOtp";

const { createHash } = require("crypto");

function hash(string) {
  return createHash("sha256").update(string).digest("hex");
}

console.log(hash("12345678"));

sendOTPMail();
