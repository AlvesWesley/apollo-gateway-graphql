const { buildFederatedSchema } = require('@apollo/federation')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')

module.exports = buildFederatedSchema([
  { typeDefs: typeDefs.queries },
  { typeDefs: typeDefs.mutations },
  { typeDefs: typeDefs.directives },
  { typeDefs: typeDefs.user, resolvers: resolvers.user },
  { typeDefs: typeDefs.contact, resolvers: resolvers.contact }
])
