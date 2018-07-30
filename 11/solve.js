const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

const partOne = function (path) {
  path = Array.isArray(path) ? path : path.split(',')

  const alterKeyInMyMap = (key, change) => mymap.set(key, mymap.get(key) + change)
  const mymap = new Map()
  mymap.set('nw', 0)
  mymap.set('n', 0)
  mymap.set('ne', 0)
  mymap.set('sw', 0)
  mymap.set('s', 0)
  mymap.set('se', 0)

  for (let i = 0; i < path.length; i++) {
    mymap.set(path[i], parseInt(mymap.get(path[i])) + 1)
  }

  const cancelOut = (key, oppositeKey) => {
    let first = mymap.get(key)
    let second = mymap.get(oppositeKey)
    if (first > second) {
      mymap.set(key, first - second)
      mymap.set(oppositeKey, 0)
      return second
    } else {
      mymap.set(oppositeKey, second - first)
      mymap.set(key, 0)
      return first
    }
  }

  cancelOut('ne', 'sw')
  cancelOut('nw', 'se')

  alterKeyInMyMap('n', cancelOut('nw', 'ne'))
  alterKeyInMyMap('s', cancelOut('sw', 'se'))
  cancelOut('n', 's')

  alterKeyInMyMap('sw', cancelOut('s', 'nw'))
  alterKeyInMyMap('se', cancelOut('s', 'ne'))
  alterKeyInMyMap('nw', cancelOut('n', 'sw'))
  alterKeyInMyMap('ne', cancelOut('n', 'se'))

  return Array.from(mymap.values()).reduce((a, b) => a + b, 0)
}

const partTwo = (arg) => {
  const path = arg.trim().split(',')
  let maxDistance = 0

  for (let i = 1; i < path.length; i++) {
    let currentDistance = partOne(path.slice(0, i))
    if (currentDistance > maxDistance) {
      maxDistance = currentDistance
    }
  }

  return maxDistance
}

console.log(partTwo(input))
module.exports = {partOne, partTwo}

