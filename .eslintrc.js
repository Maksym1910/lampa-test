module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'webpack',
    'webpack.config.js',
    'babel.config.js',
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
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-exports': 'off',
    'react/destructuring-assignment': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
