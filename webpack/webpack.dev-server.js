const path = require('path');

module.exports = ({
  port: 8080,
  static: path.join(__dirname, 'static'),
  hot: true,
  compress: true,
});
