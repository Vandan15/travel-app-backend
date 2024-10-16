const hotels = require("./queries/hotels");
const locations = require("./queries/locations");

const resolvers = {
  Query: {
    locations,
    hotels
  }
}

module.exports = resolvers;
