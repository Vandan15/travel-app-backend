const config = {
  DB: {
    USERNAME: process.env.POSTGRES_USERNAME,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    DATABASE: process.env.POSTGRES_DATABASE,
    HOST: process.env.POSTGRES_HOST,
    PORT: process.env.POSTGRES_PORT
  },
  ENCRYPTION: {
    KEY: process.env.ENCRYPTION_KEY,
    IV: process.env.ENCRYPTION_IV
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
    ACCESS_TOKEN_EXPIRY_TIME: process.env.JWT_ACCESS_TOKEN_EXPIRY_TIME,
    REFRESH_TOKEN_EXPIRY_TIME: process.env.JWT_REFRESH_TOKEN_EXPIRY_TIME
  },
  BREVO: {
    SENDER_EMAIL: process.env.BREVO_SENDER_EMAIL,
    SENDER_NAME: process.env.BREVO_SENDER_NAME,
    API_URL: process.env.BREVO_API_URL,
    API_KEY: process.env.BREVO_API_KEY
  },
  APP_URL: process.env.APP_URL
}

module.exports = config
