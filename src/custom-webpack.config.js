// @see https://dev.to/oyemade/improve-performance-in-an-angular-app-using-brotli-and-gzip-text-compression-2p1e

const BrotliPlugin = require('brotli-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    new BrotliPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
};
