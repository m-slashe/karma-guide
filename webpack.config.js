var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: [/*'babel-polyfill',*/'./module/entry.js'],
    output: {
        path: path.resolve(__dirname, 'webpackdist/'),
        publicPath: '/module/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    }
};