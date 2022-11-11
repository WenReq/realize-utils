/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:56:45
 * @FilePath: /realize-utils/src/array/uniqueArray.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 数组去除重复项
 * @date 2022-02-18
 * @param {Array} array 需要去重的数组
 * @returns {Array} 去重之后的数组，如果传入的不是数组则返回空数组。
 */
export let uniqueArray = function uniqueArray(array) {
  if (!Array.isArray(array)) {
    throw new Error('第一个参数必须是数组');
  }
  if (array.length == 1) {
    return array;
  }
  return [...new Set(array)];
};
