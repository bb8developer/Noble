'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

let appEntry;
let devtool;
let plugins;

const htmlTemplate = new HtmlWebpackPlugin({
  title: 'Noble Project',
  template: './client/index.html',
  mobile: true,
  inject: false
});
const favIcon = new FaviconsWebpackPlugin('./client/assets/logo.png');
const postCssPlugin =  new webpack.LoaderOptionsPlugin({
  options: { postcss: [precss, autoprefixer] }
});

if (process.env.NODE_ENV === 'production') {
  appEntry = ['babel-polyfill', path.join(__dirname, 'client/index.js')];
  devtool = 'source-map';
  plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      }
    }),
    htmlTemplate,
    favIcon,
    postCssPlugin
  ];
} else {
  appEntry = [
    'babel-polyfill',
    path.join(__dirname, 'client/index.js'),
    'webpack-dev-server/client?http://172.20.2.75:3000',
    'webpack/hot/only-dev-server'
  ];
  devtool = 'eval';
  plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    htmlTemplate,
    favIcon,
    postCssPlugin
  ];
}

module.exports = {
  entry: {
    app: appEntry,
    vendor: ['react', 'react-dom', 'react-mdl', 'react-relay', 'react-router', 'react-router-relay']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: '[name].js'
  },
  devtool,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
        plugins: [
          [path.join(__dirname, 'server/utils/babelRelayPlugin')]
        ],
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?-colormin']
    }, {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => {
              return [ precss, autoprefixer]
            }
          }
        },
      ],
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader?limit=10000&name=assets/[hash].[ext]'
    }]
  },
  plugins
};
