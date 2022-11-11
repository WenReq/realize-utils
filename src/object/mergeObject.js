/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-10 23:21:56
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-12 00:00:48
 * @FilePath: /realize-utils/src/object/mergeObject.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 合并对象
 * date:2022-8-30
 * @param {Object} target 目标对象
 * @param {Object} source 源对象
 * @returns {Object}
 */
export let mergeObject = function mergeObject(target, source) {
  //检测target是不是对象
  if (target === null || typeof target !== 'object') {
    target = {};
  }
  // 如果值是Array类型直接返回
  if (Array.isArray(source)) {
    return source.slice();
  }
  let sourcePropValue = null;
  Object.keys(source).forEach(function (prop) {
    sourcePropValue = source[prop];
    if (sourcePropValue && typeof sourcePropValue === 'object') {
      target[prop] = mergeObject(target[prop], sourcePropValue);
    }
    if (Object.prototype.hasOwnProperty.call(target, prop)) {
      target[prop] = [].concat(target[prop], sourcePropValue);
    } else {
      target[prop] = sourcePropValue;
    }
  });
  return target;
};
