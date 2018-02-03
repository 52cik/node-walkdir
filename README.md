# node-walkdir

> node traversal files (async/sync)

[![Linux Build][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![node][node-image]][node-url]
[![license MIT][license-image]][license-url]

[中文文档](README.zh-CN.md)

## Requirements

> node8 or higher

## How to use it

### Installation

```sh
$ yarn add node-walkdir
# or
$ npm install node-walkdir
```

### Examples

```js
const walkdir = require('node-walkdir')

/** async */
(async() => {
  // walk all files by default
  const allFiles = await walk('you-path');
  console.log('files:', allFiles);

  // only traverse the JS files
  const jsFiles = await walk('you-path', '.js');
  console.log('files:', jsFiles);

  // traverse the JS and JSON files
  const jsonFiles = await walk('you-path', ['.js', '.json']);
  console.log('files:', jsonFiles);

  // traverse the JS and JSON files by regexp
  const json2Files = await walk('you-path', /\.js(on)?$/);
  console.log('files:', json2Files);

  // only traverse the JS files with 2 level directories deep.
  const js2Files = await walk('you-path', '.js', 2);
  console.log('files:', js2Files);
})();

/** sync */
// walk all files by default
const allFiles = walk.sync('you-path');
console.log('files:', allFiles);

// only traverse the JS files
const jsFiles = walk.sync('you-path', '.js');
console.log('files:', jsFiles);

// traverse the JS and JSON files
const jsonFiles = walk.sync('you-path', ['.js', '.json']);
console.log('files:', jsonFiles);

// traverse the JS and JSON files by regexp
const json2Files = walk.sync('you-path', /\.js(on)?$/);
console.log('files:', json2Files);

// only traverse the JS files with 2 level directories deep.
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
[node-image]: https://img.shields.io/badge/node-%3E=%208-brightgreen.svg
