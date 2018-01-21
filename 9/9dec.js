const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

const onlyWords = input
  .trim()
  .split("")

const currentAndNextExl = function(ind, arr){
  return arr[ind] === "!" && arr[ind+1] === "!"
}

const noDoubles = []
for(let i = 0; i < onlyWords.length; i++){
  if(currentAndNextExl(i, onlyWords)){
    i++;
  } else{
    noDoubles.push(onlyWords[i])
  }
}

const noExl = []
for(let i = 0; i < noDoubles.length; i++){
  if(noDoubles[i] === "!"){
    i++;
  } else{
    noExl.push(noDoubles[i])
  }
}

const noGarbage = []
for(let i = 0; i < noExl.length; i++){
  if(noExl[i] === "<"){
    while(noExl[i] !== ">"){
      i++
    }
  } else{
    noGarbage.push(noExl[i])
  }
}

let layers = 0
let score = 0
for(let i = 0; i < noGarbage.length; i++){
  if(noGarbage[i] === "{"){
    layers++
    score += layers
  }
  if(noGarbage[i] === "}"){
    layers--
  }
}

console.log('total score is ' + score)

//Part two
// Use noExl from earlier

const onlyGarbage = []
for(let i = 0; i < noExl.length; i++){
  if(noExl[i] === "<"){
    i++
    while(noExl[i] !== ">"){
      onlyGarbage.push(noExl[i])
      i++
    }
  }
}

console.log('Total garbage count is ' + onlyGarbage.length)
