const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new OptimizeCSSAssetsPlugin({}),
    new JavaScriptObfuscator({
      rotateUnicodeArray: true,
    }),
  ],
});
