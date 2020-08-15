const { random } = require('./utils')

/**
 * VIN 码（车辆识别码）
 */
const VIN_CODE = '0123456789ABCDEFGHJKLMNPRSTUVWXYZ'
const YEAR_CODE = '123456789ABCDEFGHJKLMNPRSTVXY'
const LOCATION_WEIGHT = [8, 7, 6, 5, 4, 3, 2, 10, '*', 9, 8, 7, 6, 5, 4, 3, 2]
const CODE_VALUE_MAP = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'A': 1,
  'B': 2,
  'C': 3,
  'D': 4,
  'E': 5,
  'F': 6,
  'G': 7,
  'H': 8,
  'J': 1,
  'K': 2,
  'L': 3,
  'M': 4,
  'N': 5,
  'P': 7,
  'R': 9,
  'S': 2,
  'T': 3,
  'U': 4,
  'V': 5,
  'W': 6,
  'X': 7,
  'Y': 8,
  'Z': 9
}

/**
 * 生成年产量 1000 以上的车架号
 * WMI，VDS 前5位，VIS 随机生成，导致车架号可能实际不存在
 */
const generateVIN = function () {
  let vin = ''
  let vcl = VIN_CODE.length
  let vin9 = ''
  for(let i = 0; i < 8; i++) { // 生成前八位
    vin += VIN_CODE[random(vcl)]
  }
  vin += '*'
  vin += YEAR_CODE[random(YEAR_CODE.length)]
  for(let i = 11; i < 18; i++) {
    if (i > 12) {
      vin += VIN_CODE[random(10)]
    } else {
      vin += VIN_CODE[random(vcl)]
    }
  }

  vin9 = LOCATION_WEIGHT.reduce((total, val, index) => {
    if (index === 8) {
      return total += 0
    }
    return total += (val * CODE_VALUE_MAP[vin[index]])
  }, 0)
  vin9 = vin9 % 11 // 取余
  vin9 = vin9 ? vin9 : 'X'
  return vin.replace('*', vin9)
}