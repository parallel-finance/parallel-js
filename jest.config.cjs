const config = require('@polkadot/dev/config/jest.cjs');

module.exports = {
  ...config,
  moduleNameMapper: {
    '@parallel-finance/(api|types)(.*)$': '<rootDir>/packages/$1/src/$2',
    '@parallel-finance/type-definitions(.*)$': '<rootDir>/packages/type-definitions/src/$1'
  },
  testTimeout: 30000
};
