module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    strict: 0,
    "no-console": "warn",
    quotes: ["warn", "single"],
    "prettier/prettier": "warn",
    "react/prop-types": "warn",
    "no-unused-vars": "warn",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:mdx/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier", "jsx-a11y"],
  settings: {
    react: {
      version: "detect",
    },
  },
}
