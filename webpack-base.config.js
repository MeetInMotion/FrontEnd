import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import Config from 'webpack-config';

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, 'src/index.html'),
  filename: "index.html",
  inject: "body"
});

module.exports = new Config().merge({
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 8080
  },

  module: {
    rules: [
      
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel-loader'
      },
      {
        exclude: path.resolve(__dirname, 'node_modules'),
        test: /\.css$/,
        loaders:[ 'style-loader?sourceMap',
                  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]']
      }
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
});
