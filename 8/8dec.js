const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

const onlyWords = input
  .trim()
  .split('\n')
  .map(x => x.split(' '))

const multiplier = function(string){
  switch (string) {
    case 'inc':
      return 1
    case 'dec':
      return -1
  }
}

const variables = new Map(onlyWords.map(x => [x[0], 0]))

const expression = onlyWords.map(x => x.slice(4))

const multipliers = onlyWords.map(x => (x.slice(1,2)).map(x => multiplier(x)))

const nums = onlyWords.map(x => x.slice(2,3).map(x => parseInt(x)))

const evaluate = function(arr) {
  let first = variables.get(arr[0])
  let sign = arr[1]
  let second = parseInt(arr[2])

  return eval(first + arr[1] + arr[2])
}

const allHeldVals = []

for(let i = 0; i < onlyWords.length; i++){
  if(evaluate((expression[i]))) {
    variables.set(onlyWords[i][0], variables.get(onlyWords[i][0]) + multipliers[i] * nums[i])
    allHeldVals.push(variables.get(onlyWords[i][0]))
  }
}

console.log(Math.max(...allHeldVals))