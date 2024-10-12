const mongoose = require('mongoose');

const token = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['ACCESS', 'RESET'],
    default: 'ACCESS',
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  expiredAt: {
    type: Date,
    required: false
  },
});

const TokenModel = mongoose.model('Token', token);

module.exports = TokenModel;
