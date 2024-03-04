const path = require('path');

module.exports = {
  entry: './frontend/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/bundle.js'
  }
}

