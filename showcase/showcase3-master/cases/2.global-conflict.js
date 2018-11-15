!function (root) {
  function $() {
    // 第一个
    console.log('i am no.1')
  }

  /**
   * 非冲突
   */
  // $.noConflict = function () {
  //   root.$ = null
  //   return $
  // }

  root.$
}(global)

/**
 * 处理冲突
 */
// const jQuery = $.noConflict()

// function a() {
//   jQuery()
// }

function a() {
  $()
}


!function (root) {
  function $() {
    // 第二个
    console.log('i am no.2')
  }

  root.$ = $
}(global)

a()