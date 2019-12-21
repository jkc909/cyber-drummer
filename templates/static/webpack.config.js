const webpack = require('webpack');
const resolve = require('path').resolve;

const config = {
    devtool: 'eval-source-map',
    entry: __dirname + '/js/index.jsx',
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/",
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