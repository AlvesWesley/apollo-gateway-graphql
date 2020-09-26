const { ApolloServer, mergeSchemas } = require('apollo-server-express')

const federationSchema = require('./graphql-federation/federationSchema')
const schema = require('./graphql-no-federation/schema')

function context({ req }) {
  return { authorization: req.headers.authorization }
}

module.exports = new ApolloServer({
  schema: mergeSchemas({
    schemas: [schema, federationSchema]
  }),
  context
})
