import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(/*arr*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here


 /*  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } 
  if (arr = []) return []

  if (arr.includes('--discard-next') === true) {
    let x = arr.findIndex( y => y ==='--discard-next');
    console.log(x);
    arr.splice(x, x+1)
    return arr
  }
 
  if (arr.includes('--discard-prev') === true) {
    let x = arr.findIndex( y => y ==='--discard-prev');
    console.log(x);
    arr.splice(x-1, x)
    return arr
  }
 
  if (arr.includes('--double-next') === true) {
    let x = arr.findIndex( y => y ==='--double-next');
    console.log(x);
    arr[x] = arr[x+1]
    return arr
  }

  if (arr.includes('--double-prev') === true) {
    let x = arr.findIndex( y => y ==='--double-prev');
    console.log(x);
    arr[x] = arr[x-1]
    return arr
  } */

}
