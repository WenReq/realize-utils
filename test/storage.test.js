var jsdom = require('jsdom-global');
jsdom(``, {
  url: "http://localhost"
})
var getStorage = require('../src/storage/getStorage')
var setStorage = require('../src/storage/setStorage')
var removeStorage = require('../src/storage/removeStorage')
var assert = require('assert')


describe('Storage API', function () { 
  // getStorage
  describe('#getStorage()', function () {
    before(function () {
      setStorage('test', 'getTestValue')
    })
    it('getStorage("test", "getTestValue") should return true', function () { 
      assert(getStorage('test') === 'getTestValue')
    })
    after(function () { 
      removeStorage('test')
    })
  })

  // setStorage
  describe('#setStorage()', function () { 
    it('setStorage("test", "setTestValue") should return true', function () { 
      setStorage('test', 'setTestValue')
      assert(getStorage('test') === 'setTestValue')
    })
    after(function () { 
      removeStorage('test')
    })
  })

  // removeStorage
  describe('#removeStorage()', function () { 
    before(function () { 
      setStorage('test', 'removeTestValue')
    })
    it('removeStorage("test", "removeTestValue") should return false', function () { 
      removeStorage('test')
      assert.notEqual(getStorage('test') === 'removeTestValue', true)
    })
  })
})