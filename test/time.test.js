/*
 * @Descripttion:Time Function Test Example
 * @Author: wen
 * @Date: 2022-06-09 22:12:02
 * @LastEditors: wen
 * @LastEditTime: 2022-06-09 22:42:21
 */
var assert = require('assert')
var dateFormater = require('../src/time/dateFormater')
var dateStrFormat = require('../src/time/dateStrFormat')
var twoDateBetweenAllDay = require('../src/time/twoDateBetweenAllDay')
var twoDaysBetweenNum = require('../src/time/twoDaysBetweenNum')

describe('Time API', function () {
  // dateFormater
  describe('#dateFormater()', function () {
    it('dateFormater("YYYY-MM-DD", "2022.08.07") should return "2022-08-07"', function () {
      var result = dateFormater("YYYY-MM-DD", "2022.08.07")
      assert(result === "2022-08-07")
    })
    it('dateFormater("YYYY/MM/DD", "2022.08.07") should return "2022/08/07"', function () {
      var result = dateFormater("YYYY/MM/DD", "2022.08.07")
      assert(result === "2022/08/07")
    })
  })

  // dateStrFormat
  describe('#dateStrFormat()', function () {
    it('dateStrFormat("20220807", "YYYYMMDD", "YYYY年MM月DD日") should return "2022年08月07日"', function () {
      var result = dateStrFormat('20220807', 'YYYYMMDD', 'YYYY年MM月DD日')
      console.log(result)
      assert(result === "2022年08月07日")
    })
  })

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
