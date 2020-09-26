const { ApolloServer } = require('apollo-server')
const { ApolloGateway, RemoteGraphQLDataSource } = require('@apollo/gateway')

const serviceList = require('./services')

const port = 5000

function context({ req }) {
  return req.headers
}

class ForwardHeaders extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    request.http.headers.set('authorization', context.authorization)
  }
}

const gateway = new ApolloGateway({
  serviceList,
  buildService({ url }) {
    return new ForwardHeaders({ url })
  }
})

const server = new ApolloServer({
  gateway,
  context,
  subscriptions: false
})

server.listen(port)
