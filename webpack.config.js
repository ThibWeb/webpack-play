'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/js/entry'
    ],
    output: {
        path: path.join(__dirname, '/src/'),
        filename: 'bundle.js',
        publicPath: '/src/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            }
        ]
    },

    postcss: [
        require('postcss-simple-vars'),
        require('postcss-nested'),
        require('autoprefixer-core'),
        require('csswring')
    ],

    // One of the slowest but allows debugger to work.
    // See https://webpack.github.io/docs/configuration.html#devtool
    devtool: 'inline-source-map',

    // webpack-dev-server options
    devServer: {
        contentBase: './src'
    }
};
