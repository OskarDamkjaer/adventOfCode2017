const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

const seen = new Set()

let list = input
  .trim()
  .split('\t')
  .map(x => Number(x))

let firstTime = true

while (true) {
  if (seen.has(list.join(','))) {
    if(firstTime){
      seen.clear()
      firstTime = false
    } else {
      break;
    }
  }
  seen.add(list.join(','))
  let max = Math.max(...list)
  let maxIndex = list.indexOf(max)
  list[maxIndex] = 0
  for(let i = 1; i <= max; i++) {
    list[(maxIndex + i) % list.length]++
  }
  console.log(max, maxIndex, list)
}


console.log(seen.size)