const path = require('path');

module.exports = {
  entry: {
    'main': './src/js/main.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
