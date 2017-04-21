require('babel-register');
import Config from 'webpack-config';
const TARGET = process.env.NODE_ENV;
var config;
console.log('Running with node env: ' + TARGET);
switch(TARGET){
case 'production':
  config = new Config().extend('./webpack-production.config.js');
  break;
case 'develop':
  config = new Config().extend('./webpack-dev.config.js');
  break;
default:
  config = new Config().extend('./webpack-dev.config.js');
  break;

}

module.exports = config 
