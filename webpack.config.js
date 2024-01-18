// @see https://dev.to/oyemade/improve-performance-in-an-angular-app-using-brotli-and-gzip-text-compression-2p1e

const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [new CompressionPlugin({ algorithm: 'gzip' })],
};
