const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/jsx/index.jsx'),
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/public')
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react']
        }
      }]
    }]
  }
};
