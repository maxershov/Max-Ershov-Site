const path = require('path');
module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        chunkFilename: "[name].bundle.js"
        // path: path.join(__dirname, 'dist'),
        // publicPath: '/'
    },

    devServer: {
        port: 8080,
        compress: true,
        watchContentBase: true,
        progress: true,
        contentBase: path.join(__dirname, 'dist'),
        // publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: [/node_modules/]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            }
        ]
    }
};