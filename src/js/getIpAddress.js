const os = require('os')
const path = require('path')

// 获取 IP 地址
function getIpAdress() {
  const interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    let ifaces = interfaces[devName];
    for (let i = 0; i < ifaces.length; i++) {
      let alias = ifaces[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}