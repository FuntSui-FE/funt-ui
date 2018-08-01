'use strict';
const path = require('path');
const webpack = require('webpack');
const baseConf = require('./webpack.base.conf');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const config = require('./dev-config');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = merge(baseConf, {
  mode: 'development',
  entry: {
    'funt-ui': resolve('./example/index.js')
  },
  output: {
    path: resolve('./example/public'),
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
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // chunks: ['funt-ui'],
      template: 'example/index.html',
      filename: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin({
      //编译成功提示！
      compilationSuccessInfo: {
        messages: [`Funt-Ui is running here: http://${config.host}:${config.port}`]
      },
      //编译出错！
      onErrors: function(severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        const filename = error.file.split('!').pop();
        //编译出错时,右下角弹出错误提示！
        notifier.notify({
          title: 'funt-ui',
          message: severity + ': ' + error.name,
          subtitle: filename || '',
          icon: path.join(__dirname, 'funt-ui.png')
        });
      }
    })
  ]
});
