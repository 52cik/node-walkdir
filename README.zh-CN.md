# node-walkdir

> 支持类型和层级的目录遍历工具 (支持同步/异步)

[![Linux Build][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![node][node-image]][node-url]
[![license MIT][license-image]][license-url]


## 环境要求

> node8 或更高

## 如何使用

### 安卓

```sh
$ yarn add node-walkdir
# 或者
$ npm install node-walkdir
```

### 例子

```js
const walkdir = require('node-walkdir')

/** 异步 */
(async() => {
  // 遍历所有文件
  const allFiles = await walk('you-path');
  console.log('files:', allFiles);

  // 只遍历js文件 (忽略大小写)
  const jsFiles = await walk('you-path', '.js');
  console.log('files:', jsFiles);

  // 只遍历 .js .json 文件 (忽略大小写)
  const jsonFiles = await walk('you-path', ['.js', '.json']);
  console.log('files:', jsonFiles);

  // 基于正则遍历 .js .json 文件 (大小写敏感)
  const json2Files = await walk('you-path', /\.js(on)?$/);
  console.log('files:', json2Files);

  // 基于正则遍历 .js .json 文件 (大小写敏感)，只处理到2级目录
  const js2Files = await walk('you-path', '.js', 2);
  console.log('files:', js2Files);
})();

/** 同步 */
// 遍历所有文件
const allFiles = walk.sync('you-path');
console.log('files:', allFiles);

// 只遍历js文件 (忽略大小写)
const jsFiles = walk.sync('you-path', '.js');
console.log('files:', jsFiles);

// 只遍历 .js .json 文件 (忽略大小写)
const jsonFiles = walk.sync('you-path', ['.js', '.json']);
console.log('files:', jsonFiles);

// 基于正则遍历 .js .json 文件 (大小写敏感)
const json2Files = walk.sync('you-path', /\.js(on)?$/);
console.log('files:', json2Files);

// 基于正则遍历 .js .json 文件 (大小写敏感)，只处理到2级目录
const js2Files = walk.sync('you-path', '.js', 2);
console.log('files:', js2Files);
```


[travis-url]: https://travis-ci.org/52cik/node-walkdir
[travis-image]: https://img.shields.io/travis/52cik/node-walkdir/master.svg?label=linux

[coveralls-url]: https://coveralls.io/github/52cik/node-walkdir?branch=master
[coveralls-image]: https://coveralls.io/repos/52cik/node-walkdir/badge.svg?branch=master&service=github

[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg

[dependencies-url]: https://david-dm.org/52cik/node-walkdir
[dependencies-image]: https://img.shields.io/david/52cik/node-walkdir.svg?style=flat

[node-url]: https://nodejs.org
[node-image]: https://img.shields.io/badge/node-%3E%3D%200.10.0-brightgreen.svg
