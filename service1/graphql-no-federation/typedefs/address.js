const { gql } = require('apollo-server-express')

module.exports = gql`
  type Address {
    street: String
    number: Int
    city: String
  }

  input AddressCreate {
    street: String
    number: Int
    city: String
  }
`
