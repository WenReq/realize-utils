// 1. 引入要测试的模块中的函数
var standardAmount = require('../src/number/standardAmount')
var standardIntegerAmount = require('../src/number/standardIntegerAmount')
// 2. 引入来自 Node.js 的 assert 模块，用于浏览器。
var assert = require('assert')

// 3. describe - 描述；参数一：要测试的函数集合描述，参数二：测试的函数集合
describe('Number API', function () {
    // 4. describe - 参数一：要测试的函数描述，参数二：测试用例
    // standardAmount
    describe('#standardAmount()', function () {
        // it：用来在 describe 块中创建一个测试用例
        // 参数一：一个字符串一个回调函数，字符串参数是测试用例的名字或标题；参数二：回调函数是实现测试用例的代码块。
        it('standardAmount(999999999.9991) should return "999,999,999.999"', function () {
            assert.equal(standardAmount(999999999.9991), "999,999,999.999")
        })
    })

    // standardIntegerAmount
    describe('#standardIntegerAmount()', function () {
        it('standardIntegerAmount(99999999999) should return "99,999,999,999"', function () {
            assert.equal(standardIntegerAmount(99999999999), "99,999,999,999")
        })
    })
})
