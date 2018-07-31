'use strict';
const path = require('path');
const baseConf = require('./webpack.base.conf');
const merge = require('webpack-merge');
const pkg = require('../package.json');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = merge(baseConf, {
  mode: 'production',
  entry: {
    'fs-ui': resolve('./packages/index.js')
  },
  output: {
    filename: `${pkg.name}.min.js`,
    path: resolve('public'),
    library: `${pkg.name}`,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: true
  }
});
