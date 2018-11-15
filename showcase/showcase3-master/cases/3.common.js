/**
 * 相对路径调用
 */
const fail = require('./module/export-fail')

fail() // hello
console.log(fail.word) // undefined

/**
 * 为什么会这样？
 */