module.exports = {
  Query: {
    contact: () => ({ type: 'TEL', contact: '+5535988887777' })
  },
  Mutation: {
    createContact: (_, { contact }) => contact
  }
}
