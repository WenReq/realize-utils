var getKeyName = require('../src/keycode/getKeyName')
var assert = require('assert')

describe('Keycode API', function () {
  describe('#getKeyName', function () {
    it('getKeyName(13) should return "Enter"', function () {
      assert(getKeyName(13) === 'Enter')
    })
    const keycode = 10000
    it(`getKeyName(${keycode}) should return ''`, function () {
      assert(getKeyName(10000) === '')
    })
  })
})