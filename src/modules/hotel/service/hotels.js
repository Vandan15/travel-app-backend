const HotelModel = require("../../../schema/hotel.model");

const hotels = async (filter = {}) => {
  try {
    const { location } = filter;

    const search = new RegExp(location, 'i');

    const hotelData = await HotelModel.find({
      $or: [
        { country: { $regex: search } },
        { city: { $regex: search } },
      ]
    });

    return { count: hotelData?.length || 0, hotels: hotelData };
  } catch (error) {
    throw error;
  }
}

module.exports = hotels;
