/**
 * @author 定岳
 * @description 
 */
const path = require('path');



module.exports = {
  mode: "production",
  entry: './src/index.js',
  optimization: {
    minimize: false
  },
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  }
}