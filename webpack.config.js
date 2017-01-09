const { resolve } = require('path');
const webpack = require('webpack');

const SRC_DIR = 'src';
const DIST_DIR = 'dist';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './Index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, DIST_DIR),
    publicPath: '/'
  },

  context: resolve(__dirname, SRC_DIR),

  // devtool: 'inline-source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, DIST_DIR),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              // pngquant: {
              //   quality: '65-90',
              //   speed: 4
              // }
            }
        }
      ]
  }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
};
