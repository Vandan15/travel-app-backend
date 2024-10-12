const { GraphQLError } = require('graphql');

const CustomGraphqlError = message => {
  throw new GraphQLError(message, {
    extensions: { code: 'CUSTOM_GRAPHQL_ERROR' }
  })
}

module.exports = CustomGraphqlError;
