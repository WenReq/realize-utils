/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:49:35
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 23:38:03
 * @FilePath: /realize-utils/rollup.config.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
const libName = 'realize';

module.exports = {
  input: './src/index.js',
  output: [
    {
      file: pkg.browser, // 输出路径
      format: 'umd', // 输出的模块协议 umd
      name: libName,
      exports: 'named',
      sourcemap: true,
      esModule: false,
    },
    {
      file: pkg.module, // 输出路径
      format: 'esm', // 输出的模块协议 esm
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.main, // 输出路径
      format: 'cjs', // 输出的模块协议 cjs
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // 指定哪些文件夹时不进行babel编译的
    }),
    terser(),
  ],
  external: ['decimal.js'], //表示哪些模块是外部引用, 即使开启了 resolve 这里面的模块仍然是外部引用
};

// module.exports = [
//   {
//     // UMD
//     input,
//     plugins: [
//       nodeResolve(),
//       babel({
//         babelHelpers: "bundled"
//       }),
//       terser(),
//     ],
//     output: {
//       file: "lib/realize-utils.browser.js",
//       format: "umd",
//       name: libName,
//       esModule: false,
//       exports: "named",
//       sourcemap: true,
//     }
//   },
//   {
//     // ESM and CJS
//     input,
//     plugins: [nodeResolve()],
//     output: [
//       {
//         dir: "lib/realize-utils.esm.js",
//         format: "esm",
//         exports: "named",
//         sourcemap: true,
//       },
//       {
//         dir: "lib/realize-utils.cjs.js",
//         format: "cjs",
//         exports: "named",
//         sourcemap: true,
//       }
//     ]
//   }
// ]
