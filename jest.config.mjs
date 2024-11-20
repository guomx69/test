export default {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '@esri/calcite-components/dist/components/(.*)$': '<rootDir>/src/libs/components/commonTasksBar/__mocks__/calciteMocks.js'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx}'
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(@arcgis|@esri|@calcite)/).+\\.js$'
  ]
}; 