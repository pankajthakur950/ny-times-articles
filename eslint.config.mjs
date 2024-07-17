import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "react/react-in-jsx-scope": "off"
    },
    ignores:["**/*.config.ts"]
  }
];