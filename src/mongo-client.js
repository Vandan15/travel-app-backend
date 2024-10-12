// require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    const client = await mongoose.connect(uri);
    console.log(`MongoDB Connected!`);
    return client;
  } catch (error) {
    console.log('Error connecting to MongoDB :>> ', error);
    throw error;
  }
}

module.exports = connectDB
