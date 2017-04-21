var path = require('path');
import nodeExternals from 'webpack-node-externals';
export default {
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      }
    ]
  }
}
