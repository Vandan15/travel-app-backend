const isAuthenticatedDirectiveTransformer = require('./is-authenticated-directive')

const directiveObj = {
  isAuthenticated: isAuthenticatedDirectiveTransformer
}

const applyDirective = schema => {
  for (const directive in directiveObj) {
    schema = directiveObj[directive](schema, directive)
  }
  return schema
}

module.exports = applyDirective
