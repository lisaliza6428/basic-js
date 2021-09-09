import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = String(n).split('').map(Number);
  let lowest = Math.min.apply(Math, n);
  let pos = n.indexOf(lowest);
  n.splice(pos,1)
  
   return  Number(n.join(''))
}
