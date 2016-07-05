var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  devtool: 'source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    'babel-polyfill',
    './app/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  // plugins: [
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ]
  module: {
    loaders: [
      {
        loaders: ['babel-loader'],
        include: path.resolve(__dirname, 'app'),
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'app'),
        loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 3 versions',
      }
    ]
  }

}
