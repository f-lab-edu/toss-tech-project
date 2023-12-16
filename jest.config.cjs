module.exports = {
  moduleFileExtensions: ["js"],
  transform: {
    "^.+\\.(js)?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: ["<rootDir>/**/*.test.js"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
