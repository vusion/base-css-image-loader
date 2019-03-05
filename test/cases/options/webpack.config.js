const loaderPath = require.resolve('./loader/loader');
const Plugin = require('./loader/Plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: './index.js',
    },
    output: {
        path: __dirname + '/dest',
        filename: '[name].js',
        publicPath: 'dest/',
    },
    module: {
        rules: [{ test: /\.css$/, use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
            // you can specify a publicPath here
            // by default it use publicPath in webpackOptions.output
                publicPath: '../',
            },
        }, 'css-loader', loaderPath] }],
    },
    plugins: [
        new Plugin({
            filename: '[name]-test.[ext]?[hash]',
            publicPath: '//kaola.nos.netease.com/public',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
