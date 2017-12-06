const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

let arr = input.split('\n').map(x => Number(x))
//let arr = [0,3,0,1,-3]

let steps = 0
let index = 0

while (0 <= index <= arr.length && !isNaN(index)) {
  let nextStep = index + arr[index]
  if(arr[index] > 2){
    arr[index]--
  } else {
    arr[index]++
  }
  steps++;
  index = nextStep
}


console.log(steps-1)
