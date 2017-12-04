const fs = require('fs')
const input = fs.readFileSync('./2dec.txt', 'utf-8')

const fullList = input
  .split('\n')
  .map(x => x.split('\t'))
  .filter(x => x.length > 1)
  .map(x => x.map(x => Number(x)))

// DAY One
const maxReducer = function (acc, cVal, cInd, arr) {
  return Math.max(acc, cVal)
}

const minReducer = function (acc, cVal, cInd, arr) {
  return Math.min(acc, cVal)
}

const sum = fullList
  .map(x => x.reduce(maxReducer, -Infinity) - x.reduce(minReducer, Infinity))
  .reduce((acc, curr) => acc + curr)

console.log('Part one checksum is: ' + sum)

let total = 0

const okDivision = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        if (arr[i] % arr[j] === 0) {
          return arr[i] / arr[j]
        }
      }
    }
  }
  return false
}

for (let i = 0; i < fullList.length; i++) {
  total += okDivision(fullList[i])
}

console.log('Part two checksum is: ' + total)
