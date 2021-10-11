
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

// "projectRoot" is the current project root
// see: https://github.com/facebook/jest/issues/5417
const projectRoot = '<rootDir>/apps/web-app-1';

module.exports = {
  rootDir: '../..',  // This is the monorepo root

  testMatch: [
    projectRoot + '/src/**/__tests__/**/*.[jt]s?(x)',
    projectRoot + '/src/**/?(*.)+(test).[jt]s?(x)',
    '<rootDir>/{ui,utils}/*/src/?(*.)+(test).[jt]s?(x)',
  ],

  testPathIgnorePatterns: ['/node_modules/'],

  //modulePaths: [projectRoot + '/src/'],
  modulePaths: ['/src/'],

  testEnvironment: 'jsdom',

  testTimeout: 15000,

  // Automatically clear mock calls and instances before every test
  clearMocks: true,


  // Scripts to run before jest is loaded
  // ------------------------------------
  setupFiles: [
    require.resolve('regenerator-runtime/runtime') // https://github.com/facebook/jest/issues/5698
  ],


  // Scripts to run after jest is loaded
  // -----------------------------------
  setupFilesAfterEnv: [
    // 'jest-extended',
    require.resolve('./jest-setup/setup-tests.js')
  ],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': require.resolve('./jest-setup/file-mock.js'),
    // ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '\\.module\\.css$': 'identity-obj-proxy', // <--- this must come before '\\.css$'
    '\\.(css|less)$': require.resolve('./jest-setup/style-mock.js'),
  }
}
// --- EOF ---

