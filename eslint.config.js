import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    ignores: ["eslint.config.js", ".eslintrc.js", "node_modules/**", "dist/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es6,
      },
    },
    rules: {
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],
      "no-unused-vars": 1,
    },
  },
  {
    files: ["src/**/*.{js,jsx}"],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      "react/prop-types": 0,
    },
  },
  {
    files: ["app.js"],

    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },
];
