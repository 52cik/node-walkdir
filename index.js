const walk = require('./lib/walk');
const walkSync = require('./lib/walkSync');

/**
 * 转义正则
 *
 * @param {string} str
 * @returns
 */
function escapeRegexp(str) {
  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}

/**
 * 遍历目录
 *
 * @param {function} walker
 */
function wrap(walker) {
  /**
   * @param {string} path
   * @param {RegExp|string|string[]} [pattern=/./]
   * @param {number} [depth=0]
   */
  return (path, pattern = /./, depth = 0) => {
    if (pattern instanceof RegExp) {
      // nothing to do
    } else if (typeof pattern === 'string') {
      pattern = RegExp(`${escapeRegexp(pattern)}$`, 'i');
    } else if (pattern instanceof Array) {
      pattern = `(?:${pattern.map(escapeRegexp).join('|')})$`;
      pattern = RegExp(pattern, 'i');
    } else {
      pattern = /./;
    }
    return walker(path, pattern, depth);
  };
}

module.exports = wrap(walk);
module.exports.sync = wrap(walkSync);
