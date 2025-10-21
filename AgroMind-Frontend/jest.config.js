export default {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"]
};
