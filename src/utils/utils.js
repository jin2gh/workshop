/**
 * 从 0 到 range-1 范围内的随机数
 * @param {number} range
 * @returns {number}
 */
const random = range => Math.floor(Math.random(0, 1) * range)

module.exports = {
  random,
}