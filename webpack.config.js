const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  favicon: "./src/favicon.ico",
});

const copyPlugin = new CopyPlugin({
  patterns: [
    { from: "src/robots.txt", to: path.resolve(__dirname, "public") },
    { from: "src/manifest.json", to: path.resolve(__dirname, "public") },
  ],
});

module.exports = {
  entry: {
    'bundle.js': "./src/index.js",
    'extra-sw.js': "./src/extra-sw.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  // devtool: "source-map",
  devServer: {
    port: 3000,
    compress: true,
    host: 'localhost',
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    disableHostCheck: true
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [htmlPlugin, new Dotenv(), copyPlugin],
};
