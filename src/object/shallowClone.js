/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-10 23:22:07
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 23:53:34
 * @FilePath: /realize-utils/src/object/shallowClone.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 浅克隆
 * @date 2022-02-25
 * @param {Object} obj 需要拷贝的对象
 * @returns {Object} 浅拷贝之后的对象
 */
export let shallowClone = function shallowClone(obj) {
  if (!(obj instanceof Object)) {
    throw new Error('请传入对象');
  }
  const res = {};
  for (const key in obj) {
    res[key] = obj[key];
  }
  return res;
};
