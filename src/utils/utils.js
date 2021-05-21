/**
 * 从 0 到 range-1 范围内的随机数
 * @param {number} range
 * @returns {number}
 */
export const random = range => Math.floor(Math.random(0, 1) * range)

/**
 * 创建 script 元素
 * @param {string} url
 * @returns {Promise}
 */
export const createScriptEl = url => {
  const scriptElement = document.createElement('script')
  document.body.appendChild(scriptElement)
  const promise = new Promise((resolve, reject) => {
    scriptElement.addEventListener('load', e => {
      removeScript(scriptElement)
      if (!hasCallback) {
        resolve(e)
      }
    }, false)

    scriptElement.addEventListener('error', err => {
      document.body.removeChild(scriptElement)
      reject(err)
    }, false)
  })

  scriptElement.src = url

  return promise
}
