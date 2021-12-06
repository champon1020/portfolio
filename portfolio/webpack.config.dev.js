const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
      watch: {
        ignored: ["**/.#*"],
      },
    },
    devMiddleware: {
      publicPath: "/",
    },
    compress: true,
    port: 3000,
    hot: true,
  },
});
