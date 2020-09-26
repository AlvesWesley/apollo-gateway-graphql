const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    createUser(user: UserCreate): User @auth
    createContact(contact: ContactCreate): Contact @auth
  }
`
