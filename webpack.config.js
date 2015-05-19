module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: __dirname + '/src/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    postcss: [
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
