'use strict';

const { name: displayName } = require('./package');

module.exports = {
  testEnvironment: 'jsdom',
  displayName,
  cacheDirectory: './.jestcache',
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/server/',
    '(.*)/styled.ts',
    '(.*)/styled.tsx',
    '(.*).test-utils.ts',
  ],
};
