import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommended: true
});

export default [
  ...compat.extends("eslint:recommended"),
  ...compat.extends("plugin:prettier/recommended"),

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    },
    rules: {
      // add any custom rules here
    }
  }
];
