# realize-utils

前端业务代码工具库

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`日期格式化`、`url参数转对象`、`浏览器类型判断`、`节流函数`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr。

## 安装:wrench:
1. 直接下载`dist`目录下的[realize-utils.js](https://github.com/wenreq/best-utils/blob/master/dist/realize-utils.js)使用，支持UMD通用模块规范
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
npm i realize-utils
```

## 快速上手:key:

```js
import { getStorage } from 'realize-utils'
let name = getStorage('name')

console.log(name); 
// wen
```

## npm链接:link:
[npm](https://www.npmjs.com/package/realize-utils)

## github链接:link:
[git](https://github.com/wenreq/realize-utils)


## API文档:package:

### localStorage
#### &emsp;&emsp;[getStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name读取localStorage
#### &emsp;&emsp;[removeStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name删除localStorage
#### &emsp;&emsp;[setStorage](https://github.com/wenreq/realize-utils/blob/master/src/storage/index.js)&emsp;&emsp;根据name添加localStorage