const mongoose = require('mongoose');

const userBooking = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true
  },
  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  }
});

const UserBookingModel = mongoose.model('UserBooking', userBooking);

module.exports = UserBookingModel;
