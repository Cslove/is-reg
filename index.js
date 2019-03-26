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

  const isPhone = function(str) {
    const reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
    return reg.test(str)
  }

  const isPassword = function(str) {
    const reg = /^[a-zA-Z]\w{5,17}$/
    return reg.test(str)
  }

  const isStrongPassword = function(str) {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
    return reg.test(str)
  }
  return {
    isEmail,
    isPhone,
    isPassword,
    isStrongPassword,
  }
})
