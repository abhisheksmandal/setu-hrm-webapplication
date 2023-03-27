// Function to generate OTP
function generateOTP() {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  // console.log("Email is being sent...");
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

// console.log(`OTP of 6 digits: ${generateOTP()}`);

// export const otp = generateOTP;

module.exports = { generateOTP }
