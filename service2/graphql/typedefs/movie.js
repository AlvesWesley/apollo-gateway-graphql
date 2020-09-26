const { gql } = require('apollo-server-express')

module.exports = gql`
  type Movie {
    title: String
    year: Int
  }

  input Pagination {
    limit: Int
    page: Int
  }
`
