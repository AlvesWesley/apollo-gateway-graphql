const resolves = require('require-dir')()

const resolvers = { Query: {}, Mutation: {} }

Object.keys(resolves).forEach(entidade => {
  const queries = resolves[entidade].Query
  const mutations = resolves[entidade].Mutation
  resolvers.Query = { ...resolvers.Query, ...queries }
  resolvers.Mutation = { ...resolvers.Mutation, ...mutations }
})

module.exports = resolvers
