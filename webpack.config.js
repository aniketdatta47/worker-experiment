var path = require('path');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    worker: './workers/worker.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist')
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin()
  ]
};
