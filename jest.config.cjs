module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "json"],
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: [
    "<rootDir>/**/*.test.(js|jsx)",
    "<rootDir>/(tests/unit/**/*.spec.(js|jsx)|**/__tests__/*.(js|jsx))",
  ],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
