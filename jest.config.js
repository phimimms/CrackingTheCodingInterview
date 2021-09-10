module.exports = {
  automock: false,
  cacheDirectory: 'test/cache',
  collectCoverage: true,
  collectCoverageFrom: [ `src/**/*.ts` ],
  coverageDirectory: 'test/coverage',
  moduleDirectories: [ 'src', 'node_modules' ],
  moduleFileExtensions: [ 'js', 'json', 'ts' ],
  moduleNameMapper: {
    '@test/(.*)': '<rootDir>/test/$1',
  },
  preset: 'ts-jest',
  roots: [ 'src' ],
};
