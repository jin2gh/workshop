/**
 * 创建 script 元素
 * @param {string} url
 * @returns {Promise}
 */
 const createScriptEl = url => {
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

module.exports = {
  createScriptEl,
}