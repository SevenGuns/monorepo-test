/**
 * @author 定岳
 * @description 
 */

 const path = require('path');

 module.exports = {
   mode: 'production',
   entry: './src/index.js',
   optimization: {
     minimize: false
   },
   output: {
     filename: 'build.js',
     //!important 维护entry和chunk的映射关系 [https://webpack.js.org/configuration/output/#outputjsonpfunction]
     jsonpFunction: 'reppJsonpFunction',
     path: path.resolve(__dirname, 'dist'),
     publicPath: "http://localhost:5001/",
   }
 }