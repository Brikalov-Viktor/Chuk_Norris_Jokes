const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
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