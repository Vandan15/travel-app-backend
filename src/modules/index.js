const path = require('path');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const typesArray = [...loadFilesSync(path.join(__dirname, './**/*.graphql'))];
const resolverArray = loadFilesSync(path.join(__dirname, './**/*.resolvers.js'));

const typeDefs = mergeTypeDefs(typesArray);
const resolvers = mergeResolvers(resolverArray);

module.exports = { typeDefs, resolvers };
