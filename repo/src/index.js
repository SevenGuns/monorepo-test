/**
 * @author 定岳
 * @description 
 */


console.log('5001 repo in');
// import other from './other.js'

// console.log('other', other);

// other();


 (async (cb) => {
  const {default:other} = await import('./other.js');
  other();
  // console.log('chunk', chunk);
  // chunk.default()
  cb();
 })(() => {
 console.log('5001 chunk done');
 })