const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  verificationToken: {
    type: String,
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  refreshToken: {
    type: String,
  }
});

const UserModel = mongoose.model('User', user);

module.exports = UserModel;
