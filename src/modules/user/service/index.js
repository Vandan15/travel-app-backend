const forgotPassword = require('./forgot-password');
const getUserDetails = require('./get-user-details');
const getUserFromToken = require('./get-user-from-token');
const login = require('./login');
const resetPassword = require('./reset-password');
const verifyEmail = require('./verify-email');
const signUp = require('./sign-up');

class UserService {
  static async signUp(data) {
    return signUp(data);
  }

  static async login(data) {
    return login(data);
  }

  static async verifyEmail(data) {
    return verifyEmail(data);
  }

  static async getUserFromToken(token) {
    return getUserFromToken(token);
  }

  static async forgotPassword(email) {
    return forgotPassword(email);
  }

  static async resetPassword(data) {
    return resetPassword(data);
  }

  static async getUserDetails(user) {
    return getUserDetails(user);
  }
}

module.exports = UserService;
