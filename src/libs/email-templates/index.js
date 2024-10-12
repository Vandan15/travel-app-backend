const resetPassword = require("./reset-password");
const verifyUserEmail = require("./verify-user-email");

const EMAIL_TEMPLATES = {
  VERIFY_USER_EMAIL: {
    subject: "Verify Your Email Addres",
    content: verifyUserEmail
  },
  RESET_PASSWORD: {
    subject: "Reset Your Password",
    content: resetPassword
  }
}

module.exports = EMAIL_TEMPLATES;