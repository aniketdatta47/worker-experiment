var path = require('path');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
};
