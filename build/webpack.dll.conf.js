var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    vendor: [
      'vue/dist/vue.esm.js',
      'vue-router',
      'vuex',
      'element-ui',
      'axios']
  },
  output: {
    path: path.join(__dirname, '../dist/static/static/js'),
    filename: '[name].dll.[hash].js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
