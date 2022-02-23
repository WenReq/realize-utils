[![realize-utils](http://oss.tianmasport.com/gx/size/2022-02-23/196/945997117166452736.png)](https://github.com/wenreq/realize-utils)

# realize-utils

[![npm version](./static/npm.svg)](https://www.npmjs.com/package/realize-utils) [![license](./static/license.svg)](https://www.npmjs.com/package/realize-utils)

前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## 安装:wrench

1. 直接下载`dist`目录下的[realize-utils.js](https://github.com/wenreq/realize-utils/blob/master/dist/realize-utils.js)使用，支持UMD通用模块规范
2. 使用npm安装

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

``` shell
npm i realize-utils -D
```

## 快速上手:key

```js
import { setStorage, getStorage, uniqueArray } from 'realize-utils'
setStorage('name', 'wen')
let name = getStorage('name')
console.log(name);  // wen

let arr = [1, 3, 5, 1, 2, 3, 5]
let uniqueArr = uniqueArray(arr);
console.log(uniqueArr); // [1, 3, 5, 2]
```

## npm链接:link

[npm](https://www.npmjs.com/package/realize-utils)

## github链接:link

[git](https://github.com/wenreq/realize-utils)

## API文档:package

### Array

#### &emsp;&emsp;[equalityArray](https://github.com/wenreq/realize-utils/blob/master/src/array/equalityArray.js)&emsp;&emsp;判读两个数组是否相等

#### &emsp;&emsp;[mergeArrayDelRepeat](https://github.com/wenreq/realize-utils/blob/master/src/array/mergeArrayDelRepeat.js)&emsp;&emsp;合并数组后去重

#### &emsp;&emsp;[uniqueArray](https://github.com/wenreq/realize-utils/blob/master/src/array/uniqueArray.js)&emsp;&emsp;数组去重

### Class

#### &emsp;&emsp;[addClass](https://github.com/wenreq/realize-utils/blob/master/src/class/addClass.js)&emsp;&emsp;为元素添加class

#### &emsp;&emsp;[hasClass](https://github.com/wenreq/realize-utils/blob/master/src/class/hasClass.js)&emsp;&emsp;判断元素是否有某个class

#### &emsp;&emsp;[removeClass](https://github.com/wenreq/realize-utils/blob/master/src/class/removeClass.js)&emsp;&emsp;为元素移除class

### Cookie

#### &emsp;&emsp;[getCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/getCookie.js)&emsp;&emsp;根据name读取Cookie

#### &emsp;&emsp;[setCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/setCookie.js)&emsp;&emsp;根据name,vakue,days设置Cookie

#### &emsp;&emsp;[removeCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/removeCookie.js)&emsp;&emsp;根据name删除Cookie

### localStorage

#### &emsp;&emsp;[getStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name读取localStorage

#### &emsp;&emsp;[setStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name,value添加localStorage

#### &emsp;&emsp;[removeStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name删除localStorage
