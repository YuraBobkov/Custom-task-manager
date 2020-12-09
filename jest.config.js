'use strict';

const { name: displayName } = require('./package');

module.exports = {
  testEnvironment: 'jsdom',
  displayName,
  modulePaths: ['<rootDir>'],
  cacheDirectory: './.jestcache',
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: ['(.*).test-utils.ts'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/server/',
    '(.*)/styled.ts',
    '(.*)/styled.tsx',
    'src/utils/api.ts',
  ],
};
