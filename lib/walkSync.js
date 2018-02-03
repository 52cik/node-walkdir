const fs = require('fs');
const { join } = require('path');

/**
 * walkdir
 *
 * @param {string} path
 * @param {RegExp} pattern
 * @param {number} depth
 */
function walk(path, pattern, depth) {
  const files = fs.readdirSync(path);
  let fileList = [];

  files.forEach((name) => {
    const filePath = join(path, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile() && pattern.test(filePath)) {
      fileList.push(filePath);
    } else if ((depth > 1 || depth === 0) && stat.isDirectory()) {
      const list = walk(filePath, pattern, depth && depth - 1);
      fileList = fileList.concat(list);
    }
  });

  return fileList;
}

module.exports = walk;
