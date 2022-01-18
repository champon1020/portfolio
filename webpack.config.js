const path = require("path");
const webpack = require("webpack");
//const Dotenv = require("dotenv-webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader" }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf)$/i,
        loader: "file-loader",
      },
      {
        test: /\.(glsl|vert|frag)$/,
        use: [{ loader: "webpack-glsl-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "eval-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      //favicon: path.resolve(__dirname, "src/assets/images/favicon.svg"),
    }),
    new WebpackManifestPlugin(),
  ],
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "tsconfig.json" })],
  },
};
