'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
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
        loader: 'vue-loader',
        options: {
          //loaders
          loaders: {
            css: ['vue-style-loader', 'css-loader'],
            less: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
          },
          cssSourceMap: true
        }
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
  plugins: [new VueLoaderPlugin()]
};
