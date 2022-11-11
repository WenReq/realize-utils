/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 21:24:08
 * @FilePath: /realize-utils/src/cookie/removeCookie.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
import { setCookie } from './setCookie';

/**
 * 根据 name 删除 cookie
 * @date 2022-02-18
 * @param {String} name cookie 的名称
 */
export let removeCookie = function removeCookie(name) {
  // 设置已过期，系统会立刻删除 cookie
  setCookie(name, '1', -1);
};
