module.exports = {
  Query: {
    user: () => ({ username: 'admin' })
  },
  Mutation: {
    createUser: (_, { user }) => user
  }
}
