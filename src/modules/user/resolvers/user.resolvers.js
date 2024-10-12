const forgotPassword = require('./mutations/forgot-password')
const login = require('./mutations/login')
const resetPassword = require('./mutations/reset-password')
const signUp = require('./mutations/sign-up')
const verifyEmail = require('./mutations/verify-email')
const getUserDetails = require('./queries/get-user-details')

const resolvers = {
  Query: {
    getUserDetails
  },
  Mutation: {
    signUp,
    login,
    verifyEmail,
    forgotPassword,
    resetPassword,
  }
}

module.exports = resolvers
