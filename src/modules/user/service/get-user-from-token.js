const UserModel = require('../../../schema/user.model')
const { verifyJWTToken } = require('../../../utils/auth/jwt-tokens')

const getUserFromToken = async (token) => {
  try {
    const decodedData = await verifyJWTToken(token)

    const user = await UserModel.findOne({ _id: decodedData?.userId }).select({ password: 0 });

    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = getUserFromToken
