/**
 * @author 定岳
 * @description 
 */
// import test from './test.js'
console.log('5000 main')
document.getElementById('app').onclick = async () => {
  console.log('5000 loading chunk')
  const { default: test } = await import('./test.js');
  test()
}