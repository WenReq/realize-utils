/*
 * @Descripttion:
 * @Author: wen
 * @Date: 2022-06-09 22:12:02
 * @LastEditors: voanit
 * @LastEditTime: 2022-06-09 22:42:21
 */
var assert = require('assert')
var dateBetweenAllDay = require('../src/time/dateBetweenAllDay')

describe('Time API', function () {
  // dateBetweenAllDay
  describe('#dateBetweenAllDay()', function () {
    it('dateBetweenAllDay("2022-06-01", "2022-06-09") should retunr arr', function () {
      assert(dateBetweenAllDay('2022-06-01', '2022-06-09').length == 9)
    })
  })
})
