module.exports = {
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", "prettier"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "arrow-body-style": "off",
    "no-underscore-dangle": "off",
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/default-param-last": "off",
    "no-console": "warn",
  },
  ignorePatterns: ["**/*.js", "**/*.jsx"],
};
