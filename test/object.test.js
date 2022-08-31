var deepClone = require('../src/object/deepClone')
var shallowClone = require('../src/object/shallowClone')
var isEmptyObject = require('../src/object/isEmptyObject')
var getFormData = require('../src/object/getFormData')
var mergeObject = require('../src/object/mergeObject')
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

  //mergeObject
  describe('#mergeObject', function () {
    it("mergeObject({name:'张三',age:18,children:[{age:20}]},{name:'李四',class:'二班',children:[{age:20}]}) should return '{name:['张三','李四'],age:18,children:[{age:20}],class:'二班'}", function () {
      assert(JSON.stringify(mergeObject({name:'张三',age:18,children:[{age:20}]},{name:'李四',class:'二班',children:[{age:20}]}))===JSON.stringify({name:['张三','李四'],age:18, children: [ { age: 20 }, { age: 20 } ],class:'二班'}))
    })
  })
})