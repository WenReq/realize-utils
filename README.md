[![realize-utils](http://oss.tianmasport.com/gx/size/2022-02-23/196/946000020912472064.png)](https://github.com/wenreq/realize-utils)

# realize-utils

[![npm version](https://img.shields.io/static/v1?label=npm&message=v1.1.3&color=blue)](https://www.npmjs.com/package/realize-utils) [![license](https://img.shields.io/static/v1?label=license&message=MIT&color=green)](https://www.npmjs.com/package/realize-utils)

前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到 npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交 pr。

## 安装:wrench:

1. 直接下载`dist`目录下的[realize-utils.js](https://github.com/wenreq/realize-utils/blob/master/dist/realize-utils.js)使用，支持 UMD 通用模块规范
2. 使用 npm 安装

### 浏览器

```js
  <script src="realize-utils.js"></script>
  <script>
      var newArr = utils.uniqueArray([1, 3, 5, 1, 2, 3, 5])
      console.log(newArr) // [1, 3, 5, 2]

      var bFlag = utils.equalityArray([1, 2, 3], [1, 2, 3])
      console.log(bFlag) // true
  </script>
```

### npm

```shell
npm i realize-utils -D
```

## 快速上手:key:

```js
import { setStorage, getStorage, uniqueArray } from "realize-utils";
setStorage("name", "wen");
let name = getStorage("name");
console.log(name); // wen

let arr = [1, 3, 5, 1, 2, 3, 5];
let uniqueArr = uniqueArray(arr);
console.log(uniqueArr); // [1, 3, 5, 2]
```

## npm 链接:link:

[npm](https://www.npmjs.com/package/realize-utils)

## API 文档:package:

### Array
#### &emsp;&emsp;[equalityArray](https://github.com/wenreq/realize-utils/blob/master/src/array/equalityArray.js)&emsp;&emsp;判读两个数组是否相等
#### &emsp;&emsp;[mergeArrayDelRepeat](https://github.com/wenreq/realize-utils/blob/master/src/array/mergeArrayDelRepeat.js)&emsp;&emsp;合并数组后去重
#### &emsp;&emsp;[uniqueArray](https://github.com/wenreq/realize-utils/blob/master/src/array/uniqueArray.js)&emsp;&emsp;数组去重
#### &emsp;&emsp;[subArray](https://github.com/wenreq/realize-utils/blob/master/src/array/subArray.js)&emsp;&emsp;数组相减

### Class
#### &emsp;&emsp;[addClass](https://github.com/wenreq/realize-utils/blob/master/src/class/addClass.js)&emsp;&emsp;为元素添加 class
#### &emsp;&emsp;[hasClass](https://github.com/wenreq/realize-utils/blob/master/src/class/hasClass.js)&emsp;&emsp;判断元素是否有某个 class
#### &emsp;&emsp;[removeClass](https://github.com/wenreq/realize-utils/blob/master/src/class/removeClass.js)&emsp;&emsp;为元素移除 class

### Cookie
#### &emsp;&emsp;[getCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/getCookie.js)&emsp;&emsp;根据 name 读取 Cookie
#### &emsp;&emsp;[setCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/setCookie.js)&emsp;&emsp;根据 name,vakue,days 设置 Cookie
#### &emsp;&emsp;[removeCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/removeCookie.js)&emsp;&emsp;根据 name 删除 Cookie

### Device
#### &emsp;&emsp;[getExplore](https://github.com/wenreq/realize-utils/blob/master/src/device/getExplore.js)&emsp;&emsp;获取浏览器：版本号
#### &emsp;&emsp;[getOS](https://github.com/wenreq/realize-utils/blob/master/src/device/getOS.js)&emsp;&emsp;获取操作系统类型

### Dom
#### &emsp;&emsp;[getScrollTop](https://github.com/wenreq/realize-utils/blob/master/src/dom/getScrollTop.js)&emsp;&emsp;获取滚动条距顶部的距离
#### &emsp;&emsp;[offset](https://github.com/wenreq/realize-utils/blob/master/src/dom/offset.js)&emsp;&emsp;获取一个元素的距离文档(document)的位置，类似JQ中的offset()&emsp;&emsp;ele.offset()
#### &emsp;&emsp;[scrollTo](https://github.com/wenreq/realize-utils/blob/master/src/dom/scrollTo.js)&emsp;&emsp;在${duration}时间内，滚动条平滑滚动到${to}指定位置&emsp;&emsp;scrollTo(to, duration)
#### &emsp;&emsp;[setScrollTop](https://github.com/wenreq/realize-utils/blob/master/src/dom/setScrollTop.js)&emsp;&emsp;设置滚动条距顶部的距离
#### &emsp;&emsp;[windowResize](https://github.com/wenreq/realize-utils/blob/master/src/dom/windowResize.js)&emsp;&emsp;H5软键盘缩回、弹起回调

### Function
#### &emsp;&emsp;[debounce](https://github.com/wenreq/realize-utils/blob/master/src/function/debounce.js)&emsp;&emsp;函数防抖
#### &emsp;&emsp;[throttle](https://github.com/wenreq/realize-utils/blob/master/src/function/throttle.js)&emsp;&emsp;函数节流

### Keycode
#### &emsp;&emsp;[getKeyName](https://github.com/wenreq/realize-utils/blob/master/src/keycode/getKeyName.js)&emsp;&emsp;根据keycode获得键名

### localStorage
#### &emsp;&emsp;[getStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据 name 读取 localStorage
#### &emsp;&emsp;[setStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据 name,value 添加 localStorage
#### &emsp;&emsp;[removeStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据 name 删除 localStorage

### Object
#### &emsp;&emsp;[deepClone](https://github.com/wenreq/realize-utils/blob/master/src/object/deepClone.js)&emsp;&emsp;对象的深拷贝
#### &emsp;&emsp;[shallowClone](https://github.com/wenreq/realize-utils/blob/master/src/object/shallowClone.js)&emsp;&emsp;对象的浅拷贝
#### &emsp;&emsp;[isEmptyObject](https://github.com/wenreq/realize-utils/blob/master/src/object/isEmptyObject.js)&emsp;&emsp;判断对象是否为空
#### &emsp;&emsp;[getFormData](https://github.com/wenreq/realize-utils/blob/master/src/object/getFormData.js)&emsp;&emsp;将对象转换为 formData 对象

### Random
#### &emsp;&emsp;[randomColor](https://github.com/wenreq/realize-utils/blob/master/src/random/randomColor.js)&emsp;&emsp;随机生成颜色
#### &emsp;&emsp;[randomNum](https://github.com/wenreq/realize-utils/blob/master/src/random/randomNum.js)&emsp;&emsp;生成指定范围随机数

### Regexp
#### &emsp;&emsp;[isColor](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isColor.js)&emsp;&emsp;判断是否为16进制颜色，rgb 或 rgba
#### &emsp;&emsp;[isEmail](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isEmail.js)&emsp;&emsp;判断是否为邮箱地址
#### &emsp;&emsp;[isIdCard](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isIdCard.js)&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isPhoneNum.js)&emsp;&emsp;判断是否为手机号
#### &emsp;&emsp;[isUrl](https://github.com/wenreq/realize-utils/blob/master/src/regexp/isUrl.js)&emsp;&emsp;判断是否为URL地址

### String
#### &emsp;&emsp;[digitUppercase](https://github.com/wenreq/realize-utils/blob/master/src/string/digitUppercase.js)&emsp;&emsp;现金额转大写

### Supprot
#### &emsp;&emsp;[isSupportWebP](https://github.com/wenreq/realize-utils/blob/master/src/support/isSupportWebP.js)&emsp;&emsp;判断浏览器是否支持webP格式图片


### Time
#### &emsp;&emsp;[formatRemainTime](https://github.com/wenreq/realize-utils/blob/master/src/time/formatRemainTime.js)&emsp;&emsp;计算一个时间到现在过去了多久&emsp;&emsp;'451天15小时17分钟25秒'
#### &emsp;&emsp;[formatPassTime](https://github.com/wenreq/realize-utils/blob/master/src/time/formatPassTime.js)&emsp;&emsp;计算一个时间到现在过去了多久&emsp;&emsp;'1年前' '6个月前' '45分钟前'
#### &emsp;&emsp;[isLeapYear](https://github.com/wenreq/realize-utils/blob/master/src/time/isLeapYear.js)&emsp;&emsp;判断是否为闰年
#### &emsp;&emsp;[isSameDay](https://github.com/wenreq/realize-utils/blob/master/src/time/isSameDay.js)&emsp;&emsp;判断是否为同一天
#### &emsp;&emsp;[timeLeft](https://github.com/wenreq/realize-utils/blob/master/src/time/timeLeft.js)&emsp;&emsp;计算${startTime - endTime}的剩余时间
#### &emsp;&emsp;[monthDays](https://github.com/wenreq/realize-utils/blob/master/src/time/monthDays.js)&emsp;&emsp;获取指定日期月份的总天数


### Url
#### &emsp;&emsp;[parseQueryString](https://github.com/wenreq/realize-utils/blob/master/src/url/parseQueryString.js)&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringifyQueryString](https://github.com/wenreq/realize-utils/blob/master/src/url/stringifyQueryString.js)&emsp;&emsp;对象序列化