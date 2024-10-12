const UserModel = require('../../../schema/user.model');
const getMessage = require('../../../utils/get-message');
const CustomGraphqlError = require('../../../utils/graphql/error');

const verifyEmail = async (data) => {
  try {
    const { userId, token } = data;

    const user = await UserModel.findOne({ _id: userId });

    if (!user) {
      throw CustomGraphqlError(getMessage('EMAIL_DOESNT_EXIST'));
    }

    if (user?.isEmailVerified === true) {
      throw CustomGraphqlError(getMessage('EMAIL_ALREADY_VERIFIED'));
    }

    if (!user?.isEmailVerified && user.verificationToken !== token) {
      throw CustomGraphqlError(getMessage('INVALID_VERIFICATION_TOKEN'));
    }

    await UserModel.updateOne({ _id: userId }, { isEmailVerified: true, verificationToken: null });
    return { message: getMessage('EMAIL_VERIFIED_SUCCESSFULLY') };
  } catch (error) {
    throw error;
  }
}

module.exports = verifyEmail;
