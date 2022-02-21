export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['**/src/**/*.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  }
}
