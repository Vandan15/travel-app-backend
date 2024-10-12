const getUserDetails = async (user) => {
  try {
    if (user) return user;
  } catch (error) {
    throw error
  }
}

module.exports = getUserDetails
