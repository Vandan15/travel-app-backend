const getMessage = require('../../../utils/get-message');
const CustomGraphqlError = require('../../../utils/graphql/error');
const HotelModel = require('../../../schema/hotel.model');
const UserBookingModel = require('../../../schema/user-booking.model');

const createUserBooking = async (data, user = {}) => {
  try {
    const { hotelId, checkIn, checkOut } = data;

    if (new Date(checkIn) >= new Date(checkOut)) {
      throw CustomGraphqlError(getMessage('CHECKOUT_DATE_MUST_BE_GREATER_THAN_CHECKIN'));
    }

    const hotel = await HotelModel.findOne({ _id: hotelId });

    if (!hotel) {
      throw CustomGraphqlError(getMessage('HOTEL_NOT_FOUND'));
    }

    const existingBooking = await UserBookingModel.findOne({ hotelId, userId: user?._id, $or: [{ checkIn }, { checkOut }] });

    if (existingBooking) {
      throw CustomGraphqlError(getMessage('BOOKING_ALREADY_EXISTS'));
    }

    const createBookingObj = {
      userId: user?._id,
      hotelId,
      checkIn,
      checkOut
    }

    const createdBooking = await UserBookingModel.create(createBookingObj);

    const response = {
      booking: {
        id: createdBooking.id,
        checkIn: createdBooking?.checkIn,
        checkOut: createdBooking?.checkOut,
        user,
        hotel
      },
      message: getMessage('USER_BOOKING_CREATE_SUCCESS')
    }

    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = createUserBooking;
