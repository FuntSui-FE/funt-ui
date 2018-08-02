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
    'funt-ui': resolve('./packages/index.js')
  },
  output: {
    filename: `${pkg.name}.min.js`,
    path: resolve('lib'),
    library: `${pkg.name}`,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  //不引入Vue的情况下能在各个环境都能解释执行
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
