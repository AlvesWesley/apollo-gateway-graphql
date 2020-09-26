const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    movie: Movie @auth
  }
`
