const UserBookingModel = require('../../../schema/user-booking.model');
const getMessage = require('../../../utils/get-message');
const CustomGraphqlError = require('../../../utils/graphql/error');

const cancelUserBooking = async (data, user = {}) => {
  try {
    const { id: bookingId } = data;

    const booking = await UserBookingModel.findOne({ _id: bookingId, userId: user?._id });

    if (!booking) {
      throw CustomGraphqlError(getMessage('USER_BOOKING_NOT_FOUND'));
    }

    await UserBookingModel.deleteOne({ _id: bookingId });

    return { message: getMessage('USER_BOOKING_CANCELLED_SUCCESS') };
  } catch (error) {
    throw error
  }
}

module.exports = cancelUserBooking
