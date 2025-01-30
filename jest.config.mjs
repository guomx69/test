export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.test.jsx'],
  transformIgnorePatterns: [
    '/node_modules/(?!@esri/calcite-components|@stencil/core)',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
