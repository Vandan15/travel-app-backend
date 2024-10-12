const { mapSchema, getDirective, MapperKind } = require('@graphql-tools/utils');
const { defaultFieldResolver } = require('graphql');
const { get } = require('lodash');
const UserService = require('../modules/user/service');
const CustomGraphqlError = require('../utils/graphql/error');
const getMessage = require('../utils/get-message');

const isAuthenticatedDirectiveTransformer = (schema, directiveName) => {
  return mapSchema(schema, {
    // Executes once for each object field in the schema
    [MapperKind.OBJECT_FIELD]: fieldConfig => {
      // Check whether this field has the specified directive
      const isAuthenticatedDirective = getDirective(schema, fieldConfig, directiveName)?.[0];

      if (isAuthenticatedDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = async function (source, args, context, info) {
          try {
            const authToken = get(context, 'req.headers.authorization');
            if (!authToken) {
              throw CustomGraphqlError(getMessage('UNAUTHORIZED'));
            }
            const user = await UserService.getUserFromToken(authToken.split('Bearer ')[1]);

            if (!user) {
              throw CustomGraphqlError(getMessage('UNAUTHORIZED'));
            }

            if (user) {
              context.req.user = user;
              return await resolve(source, args, context, info);
            }
          } catch (error) {
            console.log(`Error from isAuthenticatedDirectiveTransformer => ${error}`);
            throw error;
          }
        }
        return fieldConfig;
      }
    }
  })
}

module.exports = isAuthenticatedDirectiveTransformer;
