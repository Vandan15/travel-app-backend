const mongoose = require('mongoose');
const { MONGODB_URL } = require('./config/config');

const connectDB = async () => {
  try {
    const client = await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB Connected!`);
    return client;
  } catch (error) {
    console.log('Error connecting to MongoDB :>> ', error);
    throw error;
  }
}

module.exports = connectDB
