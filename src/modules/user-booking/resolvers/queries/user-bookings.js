const UserService = require('../../service');

const userBookings = async (parent, args, ctx) => {
  try {
    const { req: { user = {} } = {} } = ctx;
    const response = await UserService.userBookings(user);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = userBookings;
