import isObject from './isObject.js'
import isSymbol from './isSymbol.js'

// 用作各种数组常量的引用
const NAN = 0 / 0

// 用于匹配前导和尾随空格
const reTrim = /^\s+|\s$/g

// 用于检测坏的十六进制字符串值
const reIsBadHex = /^[-+]0x[0-9a-f]+$/i

// 用于检测二进制字符串值
const reIsBinary = /^0b[01]+$/i

// 用于检测八进制字符串值
const reIsOctal = /^0o[0-7]+$/i

// parseInt
const freeParseInt = parseInt


function toNumber(value) { 
  if (typeof value === 'number') { 
    return value
  }
  if (isSymbol(value)) { 
    return NAN
  }
  if (isObject(value)) { 
    const other = typeof value.valueOf === 'function' ? value.valueOf() : value
    value = isObject(other) ? `${other}` : other
  }
  if (typeof value !== 'string') { 
    return value === 0 ? value : ~~value
  }
  value = value.replace(reTrim, '') // 匹配值的前后空格用空字符替换
  const isBinary = reIsBinary.test(value) // 是否是二进制数
  const isOctal = reIsOctal.test(value) // 是否是八进制数
  const result = (isBinary || isOctal)
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : ~~value)
  return result
}

export default toNumber