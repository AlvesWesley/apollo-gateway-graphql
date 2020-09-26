const typeDefs = require('require-dir')()

module.exports = Object.keys(typeDefs).map(entity => typeDefs[entity])
