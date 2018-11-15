/*
 * @Author: kael 
 * @Date: 2018-08-04 14:13:12 
 * @Last Modified by: kael
 * @Last Modified time: 2018-08-04 14:22:28
 */

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const str = '    hello world    ';

suite
  // add case
  .add('Regexp#replace', function() {
    str.replace(/(^\s+|\s+$)/g, '');
  })
  .add('String#trim   ', function() {
    str.trim();
  })
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });