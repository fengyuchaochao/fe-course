/*
 * @Author: kael 
 * @Date: 2018-08-04 14:13:12 
 * @Last Modified by: kael
 * @Last Modified time: 2018-08-04 14:17:05
 */

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite
  // add case
  .add('Date.now()            ', function() {
    Date.now();
  })
  .add('(new Date()).getTime()', function() {
    (new Date()).getTime();
  })
  .add('(new Date()).valueOf()', function() {
    (new Date()).valueOf();
  })
  .add('+new Date             ', function() {
    +new Date
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