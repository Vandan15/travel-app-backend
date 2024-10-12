const randomstring = require('randomstring');

const CustomGraphqlError = require('../../../utils/graphql/error')
const getMessage = require('../../../utils/get-message')
const sendMail = require('../../../libs/email/send-mail')
const { encryptData } = require('../../../utils/common');
const UserModel = require('../../../schema/user.model');
const { VERIFY_USER_EMAIL } = require('../../../libs/email-templates');
const { APP_URL } = require('../../../config/config');

const signUp = async (data) => {
  try {
    const { name, email, password } = data

    const existingUser = await UserModel.countDocuments({
      email: { $regex: new RegExp(email, 'i') }
    })

    if (existingUser) {
      throw CustomGraphqlError(getMessage('EMAIL_ALREADY_EXISTS'))
    }

    const createObj = {
      name,
      email,
      password: encryptData(password),
      verificationToken: randomstring.generate(64),
      isEmailVerified: false
    }

    const createdUser = await UserModel.create(createObj)

    delete createdUser?.password

    // SEND VERIFICATION MAIL TO USER
    const emailData = {
      reciverDetails: { reciverEmail: email },
      data: { name, url: `${APP_URL}/verify-email?email=${email}&token=${createdUser?.verificationToken}` },
      template: VERIFY_USER_EMAIL.content,
      subject: VERIFY_USER_EMAIL.subject
    }

    sendMail(emailData);

    const response = {
      id: createdUser._id,
      email: createdUser.email,
      name: createdUser.name,
      isEmailVerified: createdUser.isEmailVerified
    }

    return response;
  } catch (error) {
    throw error
  }
}

module.exports = signUp
