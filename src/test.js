/**
 * @author 定岳
 * @description 
 */

 

 export default function() {
  console.log('5000 pendding repo')
  var script = document.createElement('script');
  script.src = 'http://localhost:5001/build.js'
   // 模拟monorepo多chunk场景
  document.body.appendChild(script);
 }



