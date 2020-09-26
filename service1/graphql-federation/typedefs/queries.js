const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    user: User @auth
    contact: Contact @auth
  }
`
