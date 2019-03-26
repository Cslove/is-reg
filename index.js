(function (name, defination) {
  /** 
   * Determine the environment and export the interface
   * (amd/cmd commonjs windows)
   */
  const hasDefine = typeof define === 'function'
  const hasModule = typeof module === 'object'
  if (hasDefine) {
    define(defination)
  } else if (hasModule) {
    module.exports = defination()
  } else {
    this[name] = defination()
  }
})('isReg', function () {
  const isEmail = function(str) {
    const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return reg.test(str)
  }
  return {
    isEmail,
  }
})
