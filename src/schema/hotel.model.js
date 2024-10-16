const mongoose = require('mongoose');

const hotel = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  hotelPictures: {
    type: [String], // Array of picture URLs or file paths
    default: []
  },
  description: {
    type: String,
    required: false
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  salePrice: {
    type: Number // Optional field, can be null if no sale
  }
});

const HotelModel = mongoose.model('Hotel', hotel);

module.exports = HotelModel;
