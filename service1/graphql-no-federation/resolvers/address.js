module.exports = {
  Query: {
    address: () => ({ street: 'Rua Tal', number: 1, city: 'City' })
  },
  Mutation: {
    createAddress: (_, { address }) => address
  }
}
