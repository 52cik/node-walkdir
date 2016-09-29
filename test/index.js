'use strict';

var mock = require('mock-fs');
var should = require('should');
var walkdir = require('..');

mock({
  'path/to/fake/dir': {
    'some-file-1.txt': 'file content here',
    'some-file-2.md': 'file content here',
    'some-file-3.txt': 'file content here',
    'empty-dir': {
      'some-file-1.txt': 'file content here',
      'some-file-2.md': 'file content here',
      'some-file-3.txt': 'file content here',
    }
  },
  'path/to/some.png': new Buffer([8, 6, 7, 5, 3, 0, 9]),
  'some/other/path': {
    'some-file-1.js': 'file content here',
    'some-file-2.json': 'file content here',
    'some-file-3.js': 'file content here',
    'empty-dir': {
      'some-file-1.JS': 'file content here',
      'some-file-2.JSON': 'file content here',
      'some-file-3.JS': 'file content here',
    }
  }
});

describe('node walkdir test', function () {
  after(mock.restore);

  it('all files', function (done) {
    var count = 0;

    walkdir('.', function (file) {
      count++;
    });

    setTimeout(function () {
      count.should.equal(13);
      done();
    }, 9);
  });

  it('text files', function (done) {
    var count = 0;

    walkdir('.', '.txt', function (file) {
      count++;
    });

    setTimeout(function () {
      count.should.equal(4);
      done();
    }, 9);
  });


  it('json,js files', function (done) {
    var count = 0;

    walkdir('.', ['.json', '.js'], function (file) {
      count++;
    });

    setTimeout(function () {
      count.should.equal(6);
      done();
    }, 9);
  });

  it('json,js files by regexp', function (done) {
    var count = 0;

    walkdir('.', /\.js(on)?$/i, function (file) {
      count++;
    });

    setTimeout(function () {
      count.should.equal(6);
      done();
    }, 9);
  });

});
