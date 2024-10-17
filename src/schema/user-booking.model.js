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

// Created a virtual field 'hotel' as an alias for 'hotelId'
userBooking.virtual('hotel').get(function () {
  return this.hotelId;
});

userBooking.virtual('user').get(function () {
  return this.userId;
});

userBooking.set('toJSON', { virtuals: true });
userBooking.set('toObject', { virtuals: true });

const UserBookingModel = mongoose.model('UserBooking', userBooking);

module.exports = UserBookingModel;
