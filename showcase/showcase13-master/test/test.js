/*
 * @Author: kael 
 * @Date: 2018-02-14 17:35:48 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-03 23:53:38
 */

const assert = require('assert');
const RegExps = require('..');

describe('正则表达式', () => {

  it('case1: 正则里面怎么匹配三个字符igm的随机组合,但是不能重复，测试用例如下', () => {
    [
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
    ].forEach((str) => {
      assert.ok(RegExps.case1(str));
    });
    [
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
    ].forEach((str) => {
      assert.ok(!RegExps.case1(str));
    });
  });

  it('case2: escapeRegExp', () => {
    RegExps.case2();
  });

});
