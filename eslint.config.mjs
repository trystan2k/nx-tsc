import globals from "globals";
import pluginJs from "@eslint/js";
import json from "eslint-plugin-json";

export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    processor: json.processors['.json'],
    rules: json.configs.recommended.rules,
  },
  {
    languageOptions: { globals: globals.node }
  },
  pluginJs.configs.recommended,
];