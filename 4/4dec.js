const fs = require('fs')
const input = fs.readFileSync('./4dec.txt', 'utf-8')
//removed newline at bottom of input file

const partOne = input
  .split('\n')
  .map(x => x.split(' '))
  .filter(curr => ((new Set(curr)).size === curr.length))
  .length

const partTwo = input
  .split('\n')
  .map(x => x.split(' '))
  .map(curr => curr.map(val => val.split('').sort().join('')))
  .filter(curr => ((new Set(curr)).size === curr.length))
  .length

console.log(partOne)
console.log(partTwo)