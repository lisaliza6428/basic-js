import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  
  if (String(n).length === 0 || n === undefined) { return 1}
  n = Math.abs(n);
  n = String(n).split('');
  n = n.map(function(x){return parseInt(x);})
  n = String(n.reduce((x,y)=> x + y, 0));

  if (n.length === 2) {return Number(getSumOfDigits(n))};
  if (n.length === 1){ return Number(n)}
  
}
