const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

const instructions = input
  .trim()
  .split(',')
  .map(x => parseInt(x))

let index = 0
let skipsize = 0

const partOne = function (array, instructions) {
  let ropeArray = (array !== null) ? array : Array.from((new Array(256)).keys())
  for (let i = 0; i < instructions.length; i++) {
    ropeArray = reverseSublist(index, instructions[i], ropeArray)
    index = (index + instructions[i] + skipsize) % ropeArray.length
    skipsize++
  }
  return ropeArray.slice()
}

const reverseSublist = function (start, len, array) {
  let returnList = array.slice()
  let toRev = []
  for (let i = 0; i < len; i++) {
    toRev.push(array[(start + i) % array.length])
  }
  let rev = toRev.reverse()
  for (let i = 0; i < len; i++) {
    returnList[(start + i) % array.length] = rev[i]
  }
  return returnList
}

//Part two
const genSparseHash = function (instructions) {
  let result = partOne(null, instructions)
  const extraRounds = 63
  for (let i = 0; i < extraRounds; i++) {
    result = partOne(result, instructions)
  }
  return result
}

const split = function (array, length) {
  let multiLayer = []
  let small = []
  for (let i = 0; i <= array.length; i++) {
    if (i % length === 0) {
      if (small.length > 0) {
        multiLayer.push(small)
      }
      small = []
    }
    small.push(array[i])
  }
  return multiLayer
}

const convertToDense = function (spareHash) {
  let smallArrays = split(spareHash, 16)
  return smallArrays.map(subArr => bitwiseXOR(subArr))
}

const bitwiseXOR = function (array) {
  let op = array[0]
  for (let i = 1; i < array.length; i++) {
    op = op ^ array[i]
  }
  return op
}

const ascii = function (input) {
  return input.charCodeAt(0)
}

const hexString = function (input) {
  let hex = parseInt(input).toString(16)
  if (hex.length === 1) {
    hex = '0' + hex
  }
  return hex
}

const partTwo = function (inputString) {
  const suffix = [17, 31, 73, 47, 23]

  const instructions = inputString
    .split('')
    .map(ascii)
    .concat(suffix)

  const sparseHash = genSparseHash(instructions)
  const denseHash = convertToDense(sparseHash)

  index = 0
  skipsize = 0

  return denseHash.map(hexString).join('')
}

module.exports = {
  partTwo
}

console.log(partTwo(instructions.join()))