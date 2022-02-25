var deepClone = require('../src/object/deepClone')
var shallowClone = require('../src/object/shallowClone')
var isEmptyObject = require('../src/object/isEmptyObject')
var getFormData = require('../src/object/getFormData')
var assert = require('assert')

describe('Object API', function () {
  // deepClone
  describe('#deepClone', function () {
    it('deepClone() should return true', function () {
      assert.deepEqual(deepClone({
        name: 'wen'
      }), {
        name: 'wen'
      })
    })
  })

  // isEmptyObject
  describe('#isEmptyObject', function () {
    it('isEmptyObject({}) should return true', function () {
      assert(isEmptyObject({}) === true)
    })
  })

  // shallowClone
  describe('#shallowClone', function () {
    it('shallowClone(a) === a should return true', function () {
      let a = {
        name: 'wen'
      }
      assert(shallowClone(a).name === a.name)
    })
  })

  // getFormData
  describe('#getFormData', function () {
    it("getFormData({name:'wen', age: 28, good: true}).has('name') should return 'wen'", function () {
      assert(getFormData({
        name: 'wen',
        age: 28,
        good: true
      }).has('name') === true)
    })
  })
})