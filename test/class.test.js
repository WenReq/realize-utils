var addClass = require('../src/class/addClass')
var hasClass = require('../src/class/hasClass')
var removeClass = require('../src/class/removeClass')
var assert = require('assert')

describe('Class API', function () {
  // addClass
  describe('#addClass()', function () {
    let ele = null
    before(function () {
      let div = document.createElement('div')
      div.id = 'addClass'
      document.body.appendChild(div)
      ele = document.querySelector('#addClass')
    })
    it('addClass(ele, "test") should return true', function () {
      addClass(ele, 'test')
      assert(hasClass(ele, 'test'))
    })
    after(function () {
      document.body.removeChild(ele)
    })
  })

  // hasClass
  describe('#hasClass()', function () {
    let ele = null
    before(function () {
      let div = document.createElement('div')
      div.id = 'hasClass'
      document.body.appendChild(div)
      ele = document.querySelector('#hasClass')
      addClass(ele, 'test')
    })
    it('hasClass(ele, "test") should return true', function () {
      assert(hasClass(ele, 'test'))
    })
    it('hasClass(ele, "test1") should return false', function () {
      assert(!hasClass(ele, 'test1'))
    })
    after(function () {
      document.body.removeChild(ele)
    })
  })

  // removeClass
  describe('#remove()', function () {
    let ele = null
    before(function () {
      let div = document.createElement('div')
      div.id = 'removeClass'
      document.body.appendChild(div)
      ele = document.querySelector('#removeClass')
      addClass(ele, 'test')
    })
    it('removeClass(ele, "test") should return false', function () {
      removeClass(ele, 'test')
      assert.notEqual(hasClass(ele, 'test'), true)
    })
    it('removeClass(ele, "test") should return false', function () {
      removeClass(ele, 'test')
      assert.notEqual(hasClass(ele, 'test'), true)
      addClass(ele, 'newTest')
      assert(hasClass(ele, 'newTest'))
      removeClass(ele, 'newTest')
      assert.notEqual(hasClass(ele, 'newTest'), true)
    })
    after(function () {
      document.body.removeChild(ele)
    })
  })
})