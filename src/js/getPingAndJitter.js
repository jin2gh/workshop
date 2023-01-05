// 测试 ping 值和 jitter 抖动

let pingList = []
let ping = 0
let jitter = 0
let count = 0

const timer = setInterval(() => {
  const img = new Image()
  const startTime = new Date().getTime()
  // 此处选择加载 github 的 favicon，大小为2.2kB
  img.src = `https://github.com/favicon.ico?d=${startTime}`
  img.onload = () => {
    const endTime = new Date().getTime()
    const delta = endTime - startTime
    if ((count + 1) % 5 === 0) {
      const maxPing = Math.max(delta, ...pingList)
      const minPing = Math.min(delta, ...pingList)
      jitter = maxPing - minPing
      pingList = []
    } else {
      pingList = [...pingList, delta]
    }
    count += 1
    ping = delta
  }
  img.onerror = err => {
    console.log('error', err)
  };
  console.log(`ping: ${ping}ms`)
  console.log(`jitter: ${jitter}ms`)
}, 3000)
