const { makeExecutableSchema } = require('apollo-server-express')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')

module.exports = makeExecutableSchema({ typeDefs, resolvers })
