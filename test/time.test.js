/*
 * @Descripttion:
 * @Author: wen
 * @Date: 2022-06-09 22:12:02
 * @LastEditors: wen
 * @LastEditTime: 2022-06-09 22:42:21
 */
var assert = require('assert')
var twoDateBetweenAllDay = require('../src/time/twoDateBetweenAllDay')
var twoDaysBetweenNum = require('../src/time/twoDaysBetweenNum')

describe('Time API', function () {
  // twoDateBetweenAllDay
  describe('#twoDateBetweenAllDay()', function () {
    it('twoDateBetweenAllDay("2022-06-01", "2022-06-09") should return arr', function () {
      assert(twoDateBetweenAllDay('2022-06-01', '2022-06-09').length == 9)
    })
  })
  // twoDaysBetweenNum
  describe('#twoDaysBetweenNum()', function () {
    it('twoDaysBetweenNum("2022-06-01", "2022-06-09") should return arr', function () {
      assert(twoDaysBetweenNum("2022-06-01", "2022-06-09") == 8)
    })
  })
})
