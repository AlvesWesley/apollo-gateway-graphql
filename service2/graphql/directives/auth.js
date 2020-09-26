const {
  SchemaDirectiveVisitor,
  ForbiddenError
} = require('apollo-server-express')
const { defaultFieldResolver } = require('graphql')

module.exports = class Auth extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field
    field.resolve = async function(...args) {
      const { authorization } = args[2]

      if (authorization === 'true') {
        return resolve.apply(this, args)
      }

      throw new ForbiddenError('Unauthorized')
    }
  }
}
