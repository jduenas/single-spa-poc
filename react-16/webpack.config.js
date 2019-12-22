/* eslint-env node */
const webpack = require('webpack')
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/plugin.tsx'),
  output: {
    filename: 'plugin.js',    
    library: 'plugin',
    libraryTarget: 'amd',
    publicPath: "http:\/\/127.0.0.1:8080\/",
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ts(x)?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js'
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  devtool: 'source-map'
  // externals: [
  //   /^lodash$/,
  //   /^single-spa$/,
  //   /^react$/,
  //   /^react\/lib.*/,
  //   /^react-dom$/,
  //   /.*react-dom.*/,
  //   /^rxjs\/?.*$/,
  // ],
};

