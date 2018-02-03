const fs = require('fs');
const util = require('util');
const { join } = require('path');

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

/**
 * walkdir
 *
 * @param {string} path
 * @param {RegExp} pattern
 * @param {number} depth
 */
async function walk(path, pattern, depth) {
  const files = await readdir(path);
  let fileList = [];

  for (const name of files) {
    const filePath = join(path, name);
    const fileStat = await stat(filePath);
    if (fileStat.isFile() && pattern.test(filePath)) {
      fileList.push(filePath);
    } else if ((depth > 1 || depth === 0) && fileStat.isDirectory()) {
      const list = await walk(filePath, pattern, depth && depth - 1);
      fileList = fileList.concat(list);
    }
  }

  return fileList;
}

module.exports = walk;
