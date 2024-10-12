const UserService = require('../../service');

const getUserDetails = async (parent, args, ctx) => {
  try {
    const { req: { user = {} } = {} } = ctx;
    const response = await UserService.getUserDetails(user);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = getUserDetails;
