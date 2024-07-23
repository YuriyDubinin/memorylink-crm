const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: production ? '[name].[contenthash].js' : '[name].js',
        clean: true,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Memorulink CRM',
            template: './src/index.html',
            favicon: './src/public/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    ...(production ? [MiniCssExtractPlugin.loader] : ['style-loader']),
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: ['/node_modules'],
                use: [
                    ...(production ? [MiniCssExtractPlugin.loader] : ['style-loader']),
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.svg$/,
                exclude: ['/node_modules'],
                oneOf: [
                    {
                        resourceQuery: /jsx/,
                        use: ['@svgr/webpack'],
                    },
                    {type: 'asset/inline'},
                ],
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.pdf$|\.png$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.webp$|\.mp4$/,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.jsx', '.scss'],
    },
    devServer: {
        port: 3001,
        hot: true,
        historyApiFallback: true,
    },
    mode: production ? 'production' : 'development',
};
