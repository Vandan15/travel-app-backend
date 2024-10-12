const CustomGraphqlError = require('../../../utils/graphql/error');
const getMessage = require('../../../utils/get-message');
const { generateJWTToken } = require('../../../utils/auth/jwt-tokens');
const {
  JWT: { ACCESS_TOKEN_EXPIRY_TIME, REFRESH_TOKEN_EXPIRY_TIME }
} = require('../../../config/config');
const { decryptData } = require('../../../utils/common');
const UserModel = require('../../../schema/user.model');
const TokenModel = require('../../../schema/token.model');

const login = async (data) => {
  try {
    const { email, password } = data;

    const user = await UserModel.findOne({ email: { $regex: new RegExp(email, 'i') } });

    if (!user || (user && decryptData(user.password) !== password)) {
      throw CustomGraphqlError(getMessage('INVALID_EMAIL_OR_PASSWORD'));
    }

    if (!user.isEmailVerified) {
      throw CustomGraphqlError(getMessage('EMAIL_NOT_VERIFIED'));
    }

    const createAccessTokenObj = { userId: user?._id };

    const accessToken = generateJWTToken(createAccessTokenObj, ACCESS_TOKEN_EXPIRY_TIME);

    const createTokenObj = {
      userId: user?._id,
      type: 'ACCESS',
      token: accessToken,
    };
    await TokenModel.create(createTokenObj);

    const refreshToken = generateJWTToken(createAccessTokenObj, REFRESH_TOKEN_EXPIRY_TIME);

    await UserModel.updateOne({ _id: user._id }, { refreshToken });

    const response = { user , accessToken, refreshToken };
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = login;
