const getMessage = require('../../../utils/get-message');
const CustomGraphqlError = require('../../../utils/graphql/error');
const { APP_URL } = require('../../../config/config');
const sendMail = require('../../../libs/email/send-mail');
const { addHours } = require('../../../utils/common');
const { generateJWTToken } = require('../../../utils/auth/jwt-tokens');
const UserModel = require('../../../schema/user.model');
const TokenModel = require('../../../schema/token.model');
const { RESET_PASSWORD } = require('../../../libs/email-templates');

const forgotPassword = async (email) => {
  try {
    const user = await UserModel.findOne( { email });

    if (!user) {
      throw CustomGraphqlError(getMessage('EMAIL_DOESNT_EXIST'));
    }

    const createResetTokenObj = { userId: user?._id };
    const resetToken = generateJWTToken(createResetTokenObj, '24h');

    const createTokenObj = {
      userId: user?._id,
      type: 'RESET',
      token: resetToken,
      expiredAt: addHours(24),
    };
    await TokenModel.create(createTokenObj);

    const emailData = {
      reciverDetails: { reciverEmail: user?.email },
      subject: RESET_PASSWORD.subject,
      template: RESET_PASSWORD.content,
      data: {
        name: user.firstName,
        url: `${APP_URL}/reset-password?token=${resetToken}`
      }
    };

    sendMail(emailData);

    const message = getMessage('RESET_PASSWORD_LINK_SENT_ON_EMAIL');
    const response = { message };
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = forgotPassword;
