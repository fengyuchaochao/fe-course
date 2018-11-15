const fs = require('fs')
const path = require('path')

function runner(file) {
  const code = fs.readFileSync(path.join(__dirname, file), 'utf-8')
  const module = { exports: {} }
  const fn = new Function('module', 'exports', code)
  fn(module, module.exports)
  return module.exports
}

const fail = runner('./module/export-fail.js')

fail()
console.log(`fail.word`, fail.word)

/**
 * fn 到底生成了怎样的函数？
 * 这时候看出来为什么了吗？
 */
function _fn(module, exports) {
  exports.word = 'hello'
  module.exports = function() {
    console.log(exports.word)
  }
}
