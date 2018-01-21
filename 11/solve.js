const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

const instructions = input
  .trim()
  .split(',')

const partOne = function (path) {
  const mymap = new Map()
  mymap.set("nw", 0)
  mymap.set("n", 0)
  mymap.set("ne", 0)
  mymap.set("sw", 0)
  mymap.set("s", 0)
  mymap.set("se", 0)

  for(let i = 0; i < path.length; i++){
    mymap.set(path[i], parseInt(mymap.get(path[i])) + 1)
  }

  console.log(mymap)
}

partOne(instructions)