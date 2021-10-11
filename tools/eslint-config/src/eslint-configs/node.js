/* eslint-disable */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    './base.js'
  ],
  
  env: {
    browser: false,
    node: true, // https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
    es6: true,
  },

  ignorePatterns: ['node_modules/', 'dist/'],

  overrides: [
    {
      files: ['**/*.{ts,tsx}'],

      rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      },
    },
  ],
};
