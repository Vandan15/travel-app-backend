const HotelService = require('../../service');

const hotels = async (parent, args, ctx) => {
  try {
    const { filter } = args;
    const response = await HotelService.hotels(filter);
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = hotels;
