const webpack = require('webpack');
const resolve = require('path').resolve;

const config = {
    entry: __dirname + '/js/index.jsx',
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
    },
    resolve: {
        extensions: ['.js','.jsx','.css']
    },
    module: {
        rules: [
        {
            test: /\.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
        },
        {
            test: /\.scss$/,
            loader:  "sass-loader"
        }]
    }
};



console.log('WEBPACK BUNDLE RAN')

module.exports = config;