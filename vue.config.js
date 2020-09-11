// vue.config.js
const path = require("path");
module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  configureWebpack: {
    resolve: {
      // .mjs needed for https://github.com/graphql/graphql-js/issues/1272
      alias: {
        "@": path.resolve("src")
      }
    }
  },
};
