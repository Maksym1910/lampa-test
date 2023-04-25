const path = require('path');

module.exports = ({
  modules: [
    path.resolve('./node_modules'),
    path.resolve('./src')
  ],
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
});
