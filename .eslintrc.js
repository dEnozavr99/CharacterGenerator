module.exports = {
  root: true,
  extends: ["@react-native-community", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "prettier/prettier": ["error"],
      },
    },
  ],
};
