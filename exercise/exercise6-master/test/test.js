const assert = require('assert')

describe('regex', function () {
  it('匹配末尾是.', function () {
    const meta = require('../lib/meta')

    assert.ok(
      meta(`abc.`),
      `abc.`
    )
    assert.ok(
      !meta(`abc`),
      `abc`
    )
    assert.ok(
      meta(`...`),
      `...`
    )
    assert.ok(
      !meta(`...x`),
      `...x`
    )
    assert.ok(
      !meta(`...\n`),
      `...\\n`
    )
  })

  it('匹配一张名字为数字的 jpg 图片', function () {
    const quantifier = require('../lib/quantifier')

    assert.ok(
      quantifier(`123.jpg`),
      `123.jpg`
    )
    assert.ok(
      quantifier(`123.jpeg`),
      `123.jpeg`
    )
    assert.ok(
      !quantifier(`abc.jpeg`),
      `abc.jpeg`
    )
    assert.ok(
      !quantifier(`123abc.jpeg`),
      `123abc.jpeg`
    )
    assert.ok(
      !quantifier(`123`),
      `123`
    )
    assert.ok(
      !quantifier(`123.jpg2000`),
      `123.jpg2000`
    )
    assert.ok(
      !quantifier(`123.png`),
      `123.png`
    )
    assert.ok(
      !quantifier(`.jpeg`),
      `.jpeg`
    )
    assert.ok(
      !quantifier(`111.jpeeg`),
      `111.jpeeg`
    )
  })

  it('正确的 split 字符串', function () {
    const split = require('../lib/split')

    assert.deepEqual(
      split(`1,2,3`),
      ['1', '2', '3']
    )
    assert.deepEqual(
      split(`4, 5, 6, 7`),
      ['4', '5', '6', '7']
    )
    assert.deepEqual(
      split(`1337`),
      ['1337']
    )
    assert.deepEqual(
      split(`a,\nb,\nc,\nd`),
      ['a', 'b', 'c', 'd']
    )
    assert.deepEqual(
      split(`q\r\n  ,\r\n  r\r\n  ,\r\n  s`),
      ['q', 'r', 's']
    )
  })
})