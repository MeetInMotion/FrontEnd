var path = require('path');
import nodeExternals from 'webpack-node-externals';
export default {
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'eslint-loader',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
            {
                exclude: path.resolve(__dirname, 'node_modules'),
                test: /\.scss$/,
                loaders:[ 'style-loader?sourceMap',
                          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
                          'sass-loader']
            }
        ]
    }
}
