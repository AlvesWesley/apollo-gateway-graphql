const { ApolloServer, mergeSchemas } = require('apollo-server-express')

const federationSchema = require('./graphql/federationSchema')
const schemaDirectives = require('./graphql/directives')

function context({ req }) {
  return { authorization: req.headers.authorization }
}

module.exports = new ApolloServer({
  schema: mergeSchemas({
    schemas: [federationSchema],
    schemaDirectives
  }),
  context
})
