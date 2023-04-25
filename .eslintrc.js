module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-restricted-exports': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      }
    ],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
      }
    ],
  },
};
