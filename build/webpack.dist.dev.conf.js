const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/static/',
    filename: 'meisha.js',
    library: 'meisha',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ]
});
