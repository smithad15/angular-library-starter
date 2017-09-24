'use strict';

// Jest JUnit Reporter config
process.env.JEST_JUNIT_OUTPUT = './coverage/test-report.xml';

module.exports = {
  globals: {
    __TRANSFORM_HTML__: true,
  },
  transform: {
    '^.+\\.(ts|js|html)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  testMatch: ['**/src/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  setupTestFrameworkScriptFile: '<rootDir>/jest/tests-setup.ts',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/file.mock.ts',
    '\\.(css|less)$': '<rootDir>/jest/style.mock.ts',
  },
  testResultsProcessor: 'jest-junit',
  mapCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{ts,js}',
    '!**/src/**/index.{ts,js}',
    '!**/node_modules/**',
  ],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
