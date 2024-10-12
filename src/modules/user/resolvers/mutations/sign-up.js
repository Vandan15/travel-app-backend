const getMessage = require('../../../../utils/get-message');
const UserService = require('../../service/index');

const signUp = async (parent, args, ctx) => {
  try {
    const { data } = args;
    const userData = await UserService.signUp(data);
    const message = getMessage('USER_SIGNED_UP_SUCCESSFULLY');
    const response = { user: userData, message };
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = signUp;
