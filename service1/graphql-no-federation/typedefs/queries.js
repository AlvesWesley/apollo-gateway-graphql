const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    address: Address @auth
  }
`
