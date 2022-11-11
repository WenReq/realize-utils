/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:57:28
 * @FilePath: /realize-utils/src/array/mergeArrayDelRepeat.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 将多个数组合并为一个新的数组，并去重。
 * 该方法可以传一个或多个数组
 * @date 2022-02-18
 * @returns {Array} 将多个数组合并后并去重后的新数组
 */
export let mergeArrayDelRepeat = function mergeArrayDelRepeat() {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(...arguments[i]);
  }
  return [...new Set([...newArr])];
};
