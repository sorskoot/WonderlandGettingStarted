const path = require('path');

module.exports = {
  entry: './TheRoom-bundle.js',
  output: {
    filename: 'TheRoom-bundle.js',
    path: path.resolve(__dirname, 'deploy'),
  },
};