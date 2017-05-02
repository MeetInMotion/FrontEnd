import Config from 'webpack-config';
import path from 'path';
var config = new Config().extend('./webpack-base.config.js');
config.module.rules.push({
  enforce: 'pre',
  test: /\.jsx?$/,
  exclude: path.resolve(__dirname, 'node_modules'),
  loader: 'eslint-loader',
  options: {
    configFile: './.eslintrc-dev',
  },
});
module.exports = config;
