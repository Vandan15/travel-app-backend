const cancelUserBooking = require("./mutations/cancel-user-booking")
const createUserBooking = require("./mutations/create-user-booking")
const userBookings = require("./queries/user-bookings")

const resolvers = {
  Query: {
    userBookings
  },
  Mutation: {
    createUserBooking,
    cancelUserBooking,
  }
}

module.exports = resolvers
