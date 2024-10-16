const cancelUserBooking = require("./cancel-user-booking");
const createUserBooking = require("./create-user-booking");
const userBookings = require("./user-bookings");


class UserBookingService {
  static async userBookings(user = {}) {
    return userBookings(user);
  }

  static async createUserBooking(data, user = {}) {
    return createUserBooking(data, user);
  }

  static async cancelUserBooking(data, user = {}) {
    return cancelUserBooking(data, user);
  }
}

module.exports = UserBookingService;
