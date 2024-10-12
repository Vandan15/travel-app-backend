const UserService = require('../../service/index');

const resetPassword = async (parent, args, ctx) => {
  try {
    const { data } = args;
    const response = await UserService.resetPassword(data);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = resetPassword;
