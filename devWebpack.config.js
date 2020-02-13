/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-unused-vars */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const myLocalHost = require("./host");

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        chunkFilename: "[name].bundle.js",
        publicPath: '/'
    },
    devServer: {
        host: myLocalHost.host,
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        watchContentBase: true,
        progress: true,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true, // on 404 load publicPath => for BrowserRouter on refresh
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules'],
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    'babel-loader',
                    {
                        loader: require.resolve('ts-loader')
                    }
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                ],
              },
            {
                loader: require.resolve('file-loader'),
                exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/, /\.s[ac]ss$/],
                options: {
                    name: 'static/media/[name].[hash:8].[ext]',
                    esModule: false,
                    //   fix problem with img [object Module] in browser
                },
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'assets', 'index.html'),
        title: "Max-Ershov-Site"
    }),  new MiniCssExtractPlugin()]
};