const { gql } = require('apollo-server-express')

module.exports = gql`
  type Contact {
    contact: String
  }
`
