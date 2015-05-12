module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: __dirname + '/src/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    // One of the slowest but allows debugger to work.
    // See https://webpack.github.io/docs/configuration.html#devtool
    devtool: 'inline-source-map',

    // webpack-dev-server options
    devServer: {
        contentBase: './src'
    }
};
