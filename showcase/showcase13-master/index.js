/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-17 18:26:48
 */

const IMG_REGEXP = /^(([img])(?!.*\2))+$/;

function IMG_FN(str) {
  let l = str.length;
  if (l === 0 || l > 3) return false;
  let temp = {
    i: 0,
    m: 0,
    g: 0,
  };
  for (let i = 0; i < l; i++) {
    let char = str[i];
    if (temp[char] !== 0) return false;
    temp[char] = 1;
  }
  return true;
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

module.exports = {
  // lookaround
  // https://github.com/FE-star/2018.6/issues/13
  case1: (str) => {
    let reg_result = IMG_REGEXP.test(str);
    let fn_result = IMG_FN(str);
    if (reg_result !== fn_result) {
      throw new Error(str);
    }
    return reg_result;
  },
  case2: () => {
    console.log('\t----------------------------');
    [
      '.',
      '*+?',
      '^$',
      '{}()[]',
      '|',
      '\\',
    ].forEach(str => {
      let regStr = escapeRegExp(str);
      console.log('\tbefore:', str);
      console.log('\tafter:', regStr);
      console.log('\tregexp:', new RegExp(regStr));
      console.log('\t----------------------------');
    });
  },
  IMG_REGEXP,
  IMG_FN,
};