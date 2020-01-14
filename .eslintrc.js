module.exports = {
  'extends': ['eslint:recommended', 'google'],
  'env': {
    // For more environments, see here: http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    'browser': true,
    'es6': true,
    'node': true
  },
  'rules': {
    // Insert custom rules here
    // For more rules, see here: http://eslint.org/docs/rules/
    'no-var': 'warn',
    'require-jsdoc': 'off',
    'no-console': 'off',
    'no-invalid-this': 'off',
    'no-unused-vars': 'off',
    'padded-blocks': 'off',
    'max-len': 'off'
  },
  'parserOptions': {
    'sourceType': 'module'
  }
}
