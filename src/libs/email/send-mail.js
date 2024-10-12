const axios = require('axios')
const { BREVO } = require('../../config/config')

const sendMail = async emailData => {
  try {
    const { reciverDetails: { reciverEmail }, data: sendingData, subject, template } = emailData

    const data = {
      sender: {
        name: BREVO.SENDER_NAME,
        email: BREVO.SENDER_EMAIL
      },
      to: [
        {
          email: reciverEmail
        }
      ],
      htmlContent:template,
      subject,
      params: {
        ...sendingData
      }
    }

    await axios.post(`${BREVO.API_URL}/email`, JSON.stringify(data), {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO.API_KEY
      }
    })
  } catch (error) {
    console.log('Error from Brevo sendEmail function ', error);
  }
}

module.exports = sendMail;
