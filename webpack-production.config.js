require('babel-register');
import Config from 'webpack-config';
import path from 'path';
var config = new Config().extend('./webpack-base.config.js');
var lintLoader = {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'eslint-loader',      
};
if(process.env.FIX == "true"){
    lintLoader.options = {
        fix: true,
    };
}
config.module.rules.push(lintLoader);
module.exports = config;
