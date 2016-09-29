# node-walkdir

> node asynchronous traversal files


[![Linux Build][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![node][node-image]][node-url]
[![license MIT][license-image]][license-url]


## How to use it

### Installation

``` sh
$ npm install node-walkdir
```

### Examples

``` js
var walkdir = require('node-walkdir')

// walk all files by default
walkdir('you-path', function(file) {
  console.log('path:', file);
});

// only traverse the JS files
walkdir('you-path', '.js', function(file) {
  console.log('path:', file);
});

// traverse the JS and JSON files
walkdir('you-path', ['.js', '.json'], function(file) {
  console.log('path:', file);
});

// traverse the JS and JSON files by regexp
walkdir('you-path', /\.js(on)?/, function(file) {
  console.log('path:', file);
});
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
