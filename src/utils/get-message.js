const jsonData = require('./en.json')

const getMessage = key => {
  if (jsonData[key]) {
    return jsonData[key]
  }
  return key
}

module.exports = getMessage
