const getMessage = require('../../../../utils/get-message');
const UserService = require('../../service/index');

const login = async (parent, args, ctx) => {
  try {
    const { data } = args;
    const userData = await UserService.login(data);
    const message = getMessage('USER_LOGGED_IN_SUCCESSFULLY');
    const response = { ...userData, message };
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = login;
