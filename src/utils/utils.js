/**
 * 从 0 到 range-1 范围内的随机数
 * @param {*} range
 */
const random = (range) => {
  return Math.floor(Math.random(0, 1) * range)
}

module.exports = {
  random
}