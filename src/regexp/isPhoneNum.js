/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-10 23:22:07
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-12 00:06:11
 * @FilePath: /realize-utils/src/regexp/isPhoneNum.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 判断是否为手机号
 * @date 2022-02-27
 * @param {String|Number} str
 * @returns {Boolean}
 */
export let isPhoneNum = function isPhoneNum(str) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str);
};
