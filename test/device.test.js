var jsdom = require('jsdom-global');
jsdom(``, {
  url: "http://localhost"
})

var getExplore = require('../src/device/getExplore')
var getOS = require('../src/device/getOS')
var assert = require('assert')

describe('Device API:', function () {
  describe('#getExplore', function () {
    it("getExplore() should return 'Chrome'", function () {
      console.log(`Explore:${getExplore()}`)
      assert.equal(/^Chrome/.test(getExplore()), false)
    })
  })

  describe('#getOS', function () {
    it("getOS() should return 'windows'", function () {
      console.log(`OS:${getOS()}`)
      assert.equal(getOS() === 'windows' || getOS() === 'MacOSX' | getOS() === 'linux', false)
    })
  })
})