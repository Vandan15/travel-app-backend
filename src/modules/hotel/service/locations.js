const HotelModel = require("../../../schema/hotel.model");

const locations = async () => {
  try {
    const locationData = await HotelModel.find({}).select({ country: 1, city: 1, _id: 0 });
    return { count: locationData?.length || 0 , locations: locationData };
  } catch (error) {
    throw error;
  }
}

module.exports = locations;
