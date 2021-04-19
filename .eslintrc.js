module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["prettier", "prettier/vue", "plugin:nuxt/recommended"],
  plugins: ["prettier"],
  // add your custom rules here "@nuxtjs",
  rules: {},
};
