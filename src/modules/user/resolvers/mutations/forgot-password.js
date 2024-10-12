const UserService = require('../../service/index');

const forgotPassword = async (parent, args, ctx) => {
  try {
    const { email } = args;
    const response = await UserService.forgotPassword(email);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = forgotPassword;
