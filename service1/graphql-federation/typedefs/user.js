const { gql } = require('apollo-server-express')

module.exports = gql`
  type User {
    username: String
  }

  input UserCreate {
    username: String!
    password: String!
  }
`
