const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('../../tsconfig.json');

const projectRoot = '<rootDir>/apps/xxxx'; // https://github.com/facebook/jest/issues/5417

module.exports = {
  rootDir: '../..',

  testMatch: [
    projectRoot + '/**/__tests__/**/*.[jt]s?(x)',
    projectRoot + '/**/?(*.)+(test).[jt]s?(x)',
    '<rootDir>/{ui,utils}/**/?(*.)+(test).[jt]s?(x)',
  ],

  testPathIgnorePatterns: ['/node_modules/'],

  modulePaths: [projectRoot + '/src/'],

  testEnvironment: 'jsdom',

  testTimeout: 15000,

  //@ Automatically clear mock calls and instances before every test
  clearMocks: true,

  //@ Scripts to run before jest is loaded
  setupFiles: [
    '<rootDir>/node_modules/regenerator-runtime/runtime', // https://github.com/facebook/jest/issues/5698
  ],

  //@ Scripts to run after jest is loaded
  setupFilesAfterEnv: [
    'jest-extended',
    require.resolve('./.jest/setup-tests.js'),
  ],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/apps/xxxx/.jest/file-mock.js',
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
    '\\.module\\.css$': 'identity-obj-proxy', // <--- this must come before '\\.css$'
    '\\.css$': require.resolve('./.jest/style-mock.js'),
  },

  coverageDirectory: projectRoot + '/coverage',

  //@ If collectCoverageFrom absence, jest coverage will take into account of
  //@ configuration script in '.jest' folder. This lead to wrong statistic on coverage
  collectCoverageFrom: [
    //@ Only run coverage in src (ie. .jest/ folder is excluded).
    projectRoot + '/src/**/*.(js|jsx|ts|tsx)',
    '!' + projectRoot + '/src/**/*.test.(js|jsx|ts|tsx)',
    '!' + projectRoot + '/src/**/*.stories.(js|jsx|ts|tsx)',
    '!' + projectRoot + '/src/**/*.d.ts',
    '!' + projectRoot + '/src/**/*.interface.ts',

    //@ Including ui/ and utils/ will lead to wrong statistic because not
    //@ all packages in ui/ and utils/ are dependencies of current project.
    //@ Dependencies need to specified and listed here:
    'ui/**/src/*.(js|jsx|ts|tsx)',
    '!ui/**/src/*.test.(js|jsx|ts|tsx)',
    '!ui/**/src/*.stories.(js|jsx|ts|tsx)',
    '!ui/**/src/*.d.(ts|tsx)',

    'utils/**/src/*.(js|jsx|ts|tsx)',
    '!utils/**/src/*.test.(js|jsx|ts|tsx)',
    '!utils/**/src/*.stories.(js|jsx|ts|tsx)',
    '!utils/**/src/*.d.(ts|tsx)',
  ],

  coverageThreshold: {
    global: {
      stagements: 49,
      branch: 35,
      functions: 47,
      lines: 49,
    },
  },

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
