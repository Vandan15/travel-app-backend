const crypto = require('crypto')
const { ENCRYPTION } = require('../config/config')

const encryptData = value => {
  let cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION.KEY),
    ENCRYPTION.IV
  )
  let encrypted = cipher.update(value)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return encrypted.toString('hex')
}

const decryptData = value => {
  let encryptedText = Buffer.from(value, 'hex')
  let decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(ENCRYPTION.KEY),
    ENCRYPTION.IV
  )
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}

const addHours = hours => {
  const currentTime = new Date()
  return currentTime.setHours(currentTime.getHours() + hours)
}

module.exports = { encryptData, decryptData, addHours }
