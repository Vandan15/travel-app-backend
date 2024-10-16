const UserBookingService = require('../../service/index');

const createUserBooking = async (parent, args, ctx) => {
  try {
    const { req: { user = {} } = {} } = ctx;
    const { data } = args;
    const response = await UserBookingService.createUserBooking(data, user);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = createUserBooking;
