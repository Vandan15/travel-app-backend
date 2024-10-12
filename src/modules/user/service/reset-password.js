const getMessage = require('../../../utils/get-message');
const CustomGraphqlError = require('../../../utils/graphql/error');
const { encryptData } = require('../../../utils/common');
const { verifyJWTToken } = require('../../../utils/auth/jwt-tokens');
const UserModel = require('../../../schema/user.model');

const resetPassword = async (data) => {
  try {
    const { token, newPassword } = data;

    // CHECK TOKEN
    const decodedData = await verifyJWTToken(token);

    const user = await UserModel.findOne({ _id: decodedData?.userId });

    if (!user) {
      throw CustomGraphqlError(getMessage('EMAIL_DOESNT_EXIST'));
    }

    const password = encryptData(newPassword);
    await UserModel.updateOne({ _id: user?._id }, { password });

    const message = getMessage('PASSWORD_UPDATED_SUCCESSFULLY');
    const response = { message };
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = resetPassword;
