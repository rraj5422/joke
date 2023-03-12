const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename:"[name][ext]"
  },
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      {
        test:/\.(png|svg|jpeg|gif)$/i,
        type:'asset/resource'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
