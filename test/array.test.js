var equalityArray = require('../src/array/equalityArray')
var uniqueArray = require('../src/array/uniqueArray')
var mergeArrayDelRepeat = require('../src/array/mergeArrayDelRepeat')
var assert = require('assert')

describe('Array API', function () { 
  describe('#equalityArray()', function () { 
    it('equalityArray([1, 2, 3], [1, 2, 3]) should return true', function () {
      assert.equal(equalityArray([1, 2, 3], [1, 2, 3]), true)
    })
    it('equalityArray([1, 2, 3], [4, 2, 3]) should return false', function () {
      assert.equal(equalityArray([1, 2, 3], [4, 2, 3]), false)
    })
  })
  describe('#uniqueArray()', function () {
    it('uniqueArray([1, 2, 3, 3, 4]) should return [1, 2, 3, 4]', function () {
      assert.deepEqual(uniqueArray([1, 2, 3, 3, 4]), [1, 2, 3, 4])
    })
    it('uniqueArray([1, 2, 3, {}, null, 5, 3, 2]) should return [1, 2, 3, {}, null, 5]', function () {
      assert.deepEqual(uniqueArray([1, 2, 3, {}, null, 5, 3, 2]), [1, 2, 3, {}, null, 5])
    })
  })
  describe('#mergeArrayDelRepeat', function () {
    it('mergeArrayDelRepeat([1, 2, 3], [3, 4]) should return [1, 2, 3, 4]', function () {
      assert.deepEqual(mergeArrayDelRepeat([1, 2, 3], [3, 4]), [1, 2, 3, 4])
    })
    it('mergeArrayDelRepeat([1, 2, 3], [2, 3, {}, null]) should return [1, 2, 3, {}, null]', function () {
      assert.deepEqual(mergeArrayDelRepeat([1, 2, 3], [2, 3, {}, null]), [1, 2, 3, {}, null])
    })
  })
})