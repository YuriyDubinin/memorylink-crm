const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

function getJSONConfig(configDir, configName) {
    const configPath = require(configDir + '/' + configName);
    return configPath;
}

const PRODUCTION_MODE = process.env.NODE_ENV === 'production';
const CLIENT_CONFIGS_DIR = path.resolve(__dirname, './configs');
const CONFIG_NAME = 'prod.json';
const JSON_CONFIG = getJSONConfig(CLIENT_CONFIGS_DIR, CONFIG_NAME);

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: PRODUCTION_MODE ? '[name].[contenthash].js' : '[name].js',
        clean: true,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Memorulink CRM',
            template: './src/index.html',
            favicon: './public/favicon.ico',
            __CONFIG: JSON.stringify(JSON_CONFIG),
        }),
        new MiniCssExtractPlugin({
            filename: PRODUCTION_MODE ? '[name].[contenthash].css' : '[name].css',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    ...(PRODUCTION_MODE ? [MiniCssExtractPlugin.loader] : ['style-loader']),
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: ['/node_modules'],
                use: [
                    ...(PRODUCTION_MODE ? [MiniCssExtractPlugin.loader] : ['style-loader']),
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
    mode: PRODUCTION_MODE ? 'production' : 'development',
};
