'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const config = require('./dev-config');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  mode: 'development',
  entry: {
    'fs-mobile': resolve('./example/index.js')
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
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      example: resolve('./example'),
      packages: resolve('./packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|postcss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['fs-mobile'],
      template: 'example/index.html',
      filename: 'index.html',
      inject: true
    })
  ]
};
