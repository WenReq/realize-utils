var getCookie = require('../src/cookie/getCookie')
var setCookie = require('../src/cookie/setCookie')
var removeCookie = require('../src/cookie/removeCookie')
var assert = require('assert')

describe('Cookie API', function () {
  // setCookie
  describe('#setCookie', function () {
    it('setCookie("test", "setCookie") should return true', function () {
      setCookie('test', 'setCookie', 10)
      assert.ok(getCookie('test') === 'setCookie')
    })
    after(function () { 
      removeCookie('test')
    })
  })

  // getCookie
  describe('#getCookie', function () { 
    before(function () { 
      setCookie('test', 'getTestValue')
    })
    it('getCookie("test", "getTestValue") should return true', function () { 
      assert(getCookie('test') === 'getTestValue')
    })
    after(function () { 
      removeCookie('test')
    })
  })

  // removeCookie
  describe('#removeCookie', function () { 
    before(function () { 
      setCookie('test', 'removeTestValue')
    })
    it('removeCookie("test") should return false', function () { 
      removeCookie('test')
      assert.notEqual(getCookie('test') === 'removeTestValue', true)
    })
  })
})