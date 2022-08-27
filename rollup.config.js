const path = require('path')
const resolve = require("rollup-plugin-node-resolve")
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const { terser } = require('rollup-plugin-terser')
import pkg from "./package.json";
const formatName = "hello";

module.exports = {
  input: './src/index.js',
  output: [
    {
      file: pkg.browser, // 输出路径
      format: 'umd', // 输出的模块协议 umd
      name: formatName,
    },
    {
      file: pkg.module, // 输出路径
      format: 'esm', // 输出的模块协议 esm
    },
    {
      file: pkg.main, // 输出路径
      format: 'cjs', // 输出的模块协议 cjs
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // 指定哪些文件夹时不进行babel编译的
    }),
    json(),
    terser(),
  ],
  external: ['decimal.js'], //表示哪些模块是外部引用, 即使开启了 resolve 这里面的模块仍然是外部引用
}
