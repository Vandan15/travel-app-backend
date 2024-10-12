require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const {
  ApolloServerPluginDrainHttpServer
} = require('@apollo/server/plugin/drainHttpServer');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const { typeDefs, resolvers } = require('./modules/index');
const { ApolloServerErrorCode } = require('@apollo/server/errors');
const applyDirective = require('./directives');
const connectDB = require('./mongo-client');

const app = express();

let schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

schema = applyDirective(schema);

const initServer = async () => {
  try {
    const httpServer = http.createServer(app);
    await connectDB();

    const server = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      formatError: error => {
        if (error.extensions.code === ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED) {
          return {
            ...error,
            message: "Your query doesn't match the schema. Try double-checking it!"
          };
        }
        if (error.extensions.code === ApolloServerErrorCode.INTERNAL_SERVER_ERROR) {
          return {
            ...error,
            message: "Something went wrong! Please try again later."
          };
        }
        return error;
      }
    })
    await server.start();
    app.use('/graphql', cors(), express.json(),
      expressMiddleware(server, {
        context: async ctx => {
          return {
            ...ctx,
            req: ctx.req,
            res: ctx.res,
          };
        }
      })
    )
    const port = process.env.PORT;
    await new Promise(resolve => httpServer.listen({ port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
    return true;
  } catch (error) {
    return error;
  }
}

initServer();
