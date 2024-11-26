import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import babelParser from "@babel/eslint-parser";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {ignores: ["**/*.spec.jsx"]},
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
      },
      parser: babelParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.es2021,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      }
    },
    plugins: {
      react: pluginReact,
      prettier: eslintPluginPrettier,
    },
    settings: {
      react: {
        version: 'detect'
      },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
];
