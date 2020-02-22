/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-unused-vars */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const WebpackMonitor = require('webpack-monitor');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname),
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        chunkFilename: "[name].bundle.js",
        publicPath: '/'
    },
    resolve: {
        "alias": {
            "react": "preact/compat",
            "react-dom": "preact/compat"
          },
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['node_modules'],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
          parallel: true,
            terserOptions: {
              compress: {
                unsafe: true,
                inline: true,
                passes: 3,
                keep_fargs: false,
                booleans_as_integers: true,
                warnings:false
              },
              output: {
                comments: false,
                beautify: false
              },   
            },
            extractComments: false,
        })],
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all"
        }
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
        title: "Max-Ershov-Site",
        favicon: path.join(__dirname, "src", "assets", "favicon.ico"),
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            keepClosingSlash: true,
            minifyURLs: true
          }
        }),
    new CompressionPlugin({
        algorithm:"gzip"
      }),
    new MiniCssExtractPlugin(),
        // new WebpackMonitor({
        //     capture: true,
        //     launch: true,
        // })
    ]
};