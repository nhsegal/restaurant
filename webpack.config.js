const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    menu: './src/menu.js',
    home: './src/home.js',
  },
 
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};