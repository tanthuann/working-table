module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "jest"],
  rules: {
    "react/react-in-jsx-scope": 0,
    "linebreak-style": 0,
    quotes: 0,
    "comma-dangle": 0
  }
};
