const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    createAddress(address: AddressCreate!): Address
  }
`
