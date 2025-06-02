const { GraphQLSchema } = require('graphql');

const RootQueryType = require('./queries/RootQueryType');
const RootMutationType = require('./mutations/RootMutationType');

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

module.exports = schema