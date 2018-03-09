const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './touchDrag.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'touchDrag.min.js'
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test'
        })
    ],
};