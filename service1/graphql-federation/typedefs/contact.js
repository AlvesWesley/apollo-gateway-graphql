const { gql } = require('apollo-server-express')

module.exports = gql`
  enum ContactType {
    TEL
    EMAIL
  }

  type Contact {
    type: ContactType
    contact: String
  }

  input ContactCreate {
    type: ContactType!
    contact: String!
  }

  input Pagination {
    limit: Int
    page: Int
  }
`
