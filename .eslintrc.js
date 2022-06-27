module.exports = {
  'extends': [
    'react-app',
    'react-app/jest'
  ],
  'rules': {
    'no-console': 'warn',
    'quotes': ['warn', 'single'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'indent': ['warn', 2],
    'comma-dangle': ['warn', 'never'],
    'import/order': ['warn', {'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type']}],
    'semi': ['warn', 'always']
  }
};