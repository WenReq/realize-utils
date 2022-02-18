# realize-utils

前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## 安装:wrench:
1. 直接下载`dist`目录下的[realize-utils.js](https://github.com/wenreq/realize-utils/blob/master/dist/realize-utils.js)使用，支持UMD通用模块规范
2. 使用npm安装

### 浏览器：
```js
  <script src="realize-utils.js"></script>
  <script>
      var name = utils.getStorage('name')
  </script>
```

### npm：
``` shell
npm i realize-utils --save
```

## 快速上手:key:

```js
import { getStorage, unique } from 'realize-utils'
let name = getStorage('name')
console.log(name);  // wen

let arr = [1, 3, 5, 1, 2, 3, 5]
let uniqueArr = unique(arr);
console.log(uniqueArr); // [1, 3, 5, 2]
```

## npm链接:link:
[npm](https://www.npmjs.com/package/realize-utils)

## github链接:link:
[git](https://github.com/wenreq/realize-utils)


## API文档:package:

### Array
#### &emsp;&emsp;[equality](https://github.com/wenreq/realize-utils/blob/master/src/array/equality.js)&emsp;&emsp;判读两个数组是否相等
#### &emsp;&emsp;[mergeArrayDelRepeat](https://github.com/wenreq/realize-utils/blob/master/src/array/mergeArrayDelRepeat.js)&emsp;&emsp;合并数组后去重
#### &emsp;&emsp;[unique](https://github.com/wenreq/realize-utils/blob/master/src/array/unique.js)&emsp;&emsp;数组去重

### Cookie
#### &emsp;&emsp;[getCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/getCookie.js)&emsp;&emsp;根据name读取Cookie
#### &emsp;&emsp;[setCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/setCookie.js)&emsp;&emsp;根据name,vakue,days设置Cookie
#### &emsp;&emsp;[removeCookie](https://github.com/wenreq/realize-utils/blob/master/src/cookie/removeCookie.js)&emsp;&emsp;根据name删除Cookie

### localStorage
#### &emsp;&emsp;[getStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name读取localStorage
#### &emsp;&emsp;[setStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name,value添加localStorage
#### &emsp;&emsp;[removeStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name删除localStorage