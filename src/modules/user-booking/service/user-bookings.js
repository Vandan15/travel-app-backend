const UserBookingModel = require('../../../schema/user-booking.model');

const userBookings = async (user = {}) => {
  try {
    const { _id: userId } = user;

    const bookingsData = await UserBookingModel.find({ userId }).populate({
      path: "User",
      strictPopulate: false
    }).populate({
      path: "Hotel", strictPopulate: false
    }).exec();

    return { count: bookingsData.length || 0, userBookings: bookingsData || [] };
  } catch (error) {
    throw error;
  }
}

module.exports = userBookings;
