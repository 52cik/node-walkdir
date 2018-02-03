import test from 'ava';
import mock from 'mock-fs';
import walk from '..';

test.before(() => {
  mock({
    '1.js': 'file content here',
    '2.js': 'file content here',
    'sub-dir': {
      '1.js': 'file content here',
      '2.js': 'file content here',
    },
    'path/to/fake/dir': {
      'some-file-1.txt': 'file content here',
      'some-file-2.md': 'file content here',
      'some-file-3.txt': 'file content here',
      'sub-dir': {
        'some-file-1.txt': 'file content here',
        'some-file-2.md': 'file content here',
        'some-file-3.txt': 'file content here',
      },
      'empty-dir': {},
    },
    'path/to/some.png': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
    'some/other/path': {
      'some-file-1.js': 'file content here',
      'some-file-2.json': 'file content here',
      'some-file-3.js': 'file content here',
      'sub-dir': {
        'some-file-1.JS': 'file content here',
        'some-file-2.JSON': 'file content here',
        'some-file-3.JS': 'file content here',
      },
      'empty-dir': {},
    },
  });
});

test.after('cleanup', () => {
  mock.restore();
});

/* walk async */

test('walk async all', async (t) => {
  const files = await walk('.');
  t.is(files.length, 17);
});

test('walk async .js ignoreCase', async (t) => {
  const files = await walk('.', '.js');
  t.is(files.length, 8);
});

test('walk async .js with Regex (not ignoreCase)', async (t) => {
  const files = await walk('.', /\.js$/);
  t.is(files.length, 6);
});

test('walk async .js and .json ', async (t) => {
  const files = await walk('.', ['.js', '.json']);
  t.is(files.length, 10);
});

test('walk async .js and .json with Regex (not ignoreCase)', async (t) => {
  const files = await walk('.', /\.js(on)?$/);
  t.is(files.length, 7);
});

test('walk async .js with Regex', async (t) => {
  const files = await walk('.', /\/other\/path\/.+\.js$/);
  t.is(files.length, 2);
});

test('walk async .js with directories deep 1', async (t) => {
  const files = await walk('.', '.js', 1);
  t.is(files.length, 2);
});

test('walk async .js with directories deep 2', async (t) => {
  const files = await walk('.', '.js', 2);
  t.is(files.length, 4);
});

test('walk async .js with directories deep 3', async (t) => {
  const files = await walk('.', '.js', 3);
  t.is(files.length, 4);
});

test('walk async .js with directories deep 4', async (t) => {
  const files = await walk('.', '.js', 4);
  t.is(files.length, 6);
});

/* walk sync */

test('walk sync all', (t) => {
  const files = walk.sync('.');
  t.is(files.length, 17);
});

test('walk sync .js ignoreCase', (t) => {
  const files = walk.sync('.', '.js');
  t.is(files.length, 8);
});

test('walk sync .js with Regex (not ignoreCase)', (t) => {
  const files = walk.sync('.', /\.js$/);
  t.is(files.length, 6);
});

test('walk sync .js and .json ', (t) => {
  const files = walk.sync('.', ['.js', '.json']);
  t.is(files.length, 10);
});

test('walk sync .js and .json with Regex (not ignoreCase)', (t) => {
  const files = walk.sync('.', /\.js(on)?$/);
  t.is(files.length, 7);
});

test('walk sync .js with Regex', (t) => {
  const files = walk.sync('.', /\/other\/path\/.+\.js$/);
  t.is(files.length, 2);
});

test('walk sync .js with directories deep 1', (t) => {
  const files = walk.sync('.', '.js', 1);
  t.is(files.length, 2);
});

test('walk sync .js with directories deep 2', (t) => {
  const files = walk.sync('.', '.js', 2);
  t.is(files.length, 4);
});

test('walk sync .js with directories deep 3', (t) => {
  const files = walk.sync('.', '.js', 3);
  t.is(files.length, 4);
});

test('walk sync .js with directories deep 4', (t) => {
  const files = walk.sync('.', '.js', 4);
  t.is(files.length, 6);
});

test('walk sync all with unknown parameter', (t) => {
  const files = walk.sync('.', 2333);
  t.is(files.length, 17);
});
