/*
 * @Author: kael 
 * @Date: 2018-07-03 23:38:32 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-17 18:27:33
 */

const main = require('..');

const list = [
  'img',
  'igm',
  'mig',
  'mgi',
  'gim',
  'gmi',
  'mg',
  'gm',
  'gi',
  'ig',
  'im',
  'mi',
  'i',
  'm',
  'g',
  '',
  'gg',
  'gx',
  'igi',
  'igg',
  'iigg',
  'igig',
  'gmigig',
  'kdkdk',
  'iiiiiimmmmmmmmgggggggggggggg',
  'iiiiiimmmiiiiiiimmmmmgggggggggggggg',
];

function run(name, times, fn) {
  console.time(name);
  while (times--) {
    list.forEach(str => {
      fn(str);
    });
  }
  console.timeEnd(name);
}

const REG = main.IMG_REGEXP;
const FN = main.IMG_FN

let times_max = 8;
while (times_max--) {
  let times = parseFloat(`1e` + times_max);
  console.log(`times:`, times);
  run('正则', times, str => REG.test(str));
  run('函数', times, FN);
}