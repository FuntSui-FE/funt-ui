'use strict';
const path = require('path');
const webpack = require('webpack');
const baseConf = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const config = require('./dev-config');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = merge(baseConf, {
  mode: 'development',
  entry: {
    'fs-ui': resolve('./example/index.js')
  },
  output: {
    path: resolve('./example/dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  devtool: config.sourceMap,
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true,
    host: config.host,
    port: config.port,
    compress: true,
    overlay: {
      errors: true,
      warnings: false
    },
    quiet: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['fs-ui'],
      template: 'example/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
});
