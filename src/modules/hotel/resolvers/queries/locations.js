const HotelService = require('../../service');

const locations = async (parent, args, ctx) => {
  try {
    const response = await HotelService.locations();
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = locations;
