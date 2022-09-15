const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    menu: './src/menu.js',
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