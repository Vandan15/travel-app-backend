const UserService = require('../../service');

const verifyEmail = async (parent, args, ctx) => {
  try {
    const { data } = args;

    const verifyEmailData = await UserService.verifyEmail(data);
    return verifyEmailData;
  } catch (error) {
    throw error;
  }
}

module.exports = verifyEmail;
