/* xxxeslint-disable */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    './base.js',
    'plugin:react/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react'
  ],

  plugins: ['react', 'react-hooks'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    }
  },

  env: {
    browser: true
  },

  rules: {
    'no-unused-vars': 'warn',
    strict: ['error', 'never'],

    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 'error', // https://github.com/eslint/eslint/issues/11183
    'react/jsx-uses-vars': ['error'], // https://github.com/eslint/eslint/issues/8226
    'react/display-name': 'warn', // https://github.com/yannickcr/eslint-plugin-react/issues/597
  },
};
