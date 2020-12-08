'use strict';

const { name: displayName } = require('./package');

module.exports = {
  testEnvironment: 'jsdom',
  displayName,
  cacheDirectory: './.jestcache',
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  preset: 'ts-jest',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      statements: 80,
    },
  },

  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/server/',
    '(.*)/styled.ts',
    '(.*)/styled.tsx',
    '(.*).test-utils.ts',
  ],
};
