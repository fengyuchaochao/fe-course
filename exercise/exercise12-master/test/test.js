const assert = require('assert')

let mod = null
global.define = function (fn) {
  const module = { exports: {} }
  fn(module, module.exports)
  mod = module
}

describe('loader', function () {
  it('可以通过 define 拿到数据', function () {
    require('../dist/index')
    assert.equal(mod.exports, 'hello world')
  })
})