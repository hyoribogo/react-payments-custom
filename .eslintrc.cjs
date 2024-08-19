module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  plugins: [
    "react-refresh",
    "@typescript-eslint",
    "react-hooks",
    "react",
    "import",
    "prettier",
    "jest",
    "storybook",
  ],
  extends: ["eslint:recommended"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
