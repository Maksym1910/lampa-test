const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config()

const webpackModule = require('./webpack/webpack.module');
const webpackDevServer = require('./webpack/webpack.dev-server');
const webpackResolve = require('./webpack/webpack.resolve');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: {
    app: path.resolve('src', 'index.jsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: env.production ? 'js/[chunkhash:6].[name].js' : 'js/[name].js',
    chunkFilename: env.production ? 'js/[chunkhash:6].[name].js' : 'js/[name].js',
  },
  module: webpackModule,
  devServer: webpackDevServer,
  resolve: webpackResolve,
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
    })
  ],
});
