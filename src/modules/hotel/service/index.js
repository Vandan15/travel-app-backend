const hotels = require('./hotels');
const locations = require('./locations');

class HotelService {
  static async hotels(filter = {}) {
    return hotels(filter);
  }
  static async locations() {
    return locations();
  }
}

module.exports = HotelService;
