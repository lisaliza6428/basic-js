import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let n = 1;
  let output = '';
   for (let i = 0; i <= str.length; i++){
     if (str[i] === str[i+1]){
       n = n + 1;}
       else{
       output = output + n + str[i];
         n = 1;
     }
         
   }
          if (output.includes('1')){
            return output.replace(/1/g, '')
          }
          else{
            return output
          }
}
