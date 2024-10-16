const UserBookingService = require('../../service/index');

const cancelUserBooking = async (parent, args, ctx) => {
  try {
    const { req: { user = {} } = {} } = ctx;
    const { data } = args;
    const response = await UserBookingService.cancelUserBooking(data, user);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = cancelUserBooking;
