const { buildFederatedSchema } = require('@apollo/federation')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')

module.exports = buildFederatedSchema([
  { typeDefs: typeDefs.queries },
  { typeDefs: typeDefs.directives },
  { typeDefs: typeDefs.movie, resolvers: resolvers.movie }
])
