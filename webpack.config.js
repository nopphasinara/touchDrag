const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')

module.exports = {
  entry: './touchDrag.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'touchDrag.min.js'
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader']
        })
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Test',
      inject: 'body',
      template: './demo.html'
    }),
    new ExtractTextPlugin('[name].css')
  ]
}
