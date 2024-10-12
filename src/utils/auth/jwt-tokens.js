const jwt = require('jsonwebtoken')
const {
  JWT: { SECRET }
} = require('../../config/config')
const CustomGraphqlError = require('../graphql/error')
const getMessage = require('../get-message')

const generateJWTToken = (data, expiresIn) => {
  return jwt.sign(data, SECRET, { expiresIn })
}

const verifyJWTToken = async token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return reject(CustomGraphqlError(getMessage('SESSION_EXPIRED')))
        }
        return reject(err)
      }
      return resolve(decoded)
    })
  })
}

module.exports = { generateJWTToken, verifyJWTToken }
