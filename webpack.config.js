const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options:{
                presets: ["@babel/preset-env", "@babel/preset-react"],
            }
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
  ],
  devtool: 'inline-source-map',
};