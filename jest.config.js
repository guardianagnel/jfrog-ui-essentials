module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/src/**/*.spec.(js)'
  ],
  testURL: 'http://localhost/',
  setupFiles:["./src/jest-setup.js"],
  /* Commenting out these lines since they clutter up the console  */
//   collectCoverage: false,
//   collectCoverageFrom: ["**/src/**/*.{js,vue}", "!**/node_modules/**"]
}
