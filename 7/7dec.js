const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8')

const onlyWords = input
  .trim()
  .split('\n')
  .map(x => x.split(' ')
    .filter(x => x!=='->' && x.split("").indexOf("(") === -1 ) // Ta bort vikter och -> pilar
    .map(x => x.includes(",") ? x.substring(0, x.length - 1) : x)) //Ta bort , i slutet av ord


//Vi vet att den som är längst upp i trädet är den enda som ingen annan pekar på.

const allWords = onlyWords.map(x => x[0]).reduce((acc, curr) => acc.concat(curr), []) // Alla ord i en vektor

const notTopLevel =
  new Set(onlyWords
    .map(x => x.slice(1)) // skippa första ordet
    .filter(x => x.length > 1) // ta bort tomma arrays
    .reduce((acc, curr) => acc.concat(curr), [])) // platta ut till en array

const topNode = allWords.filter(x => !notTopLevel.has(x)) //Hitta värdet som finns i ena men inte andra

//console.log(topNode)

// Part two!

const weightMap = new Map(input
  .trim()
  .split('\n')
  .map(x => x.split(' '))
  .slice(2)
  .map(x => [x[0], Number(x[1].substring(1,x[1].length -1))]))

weightMap.set('oweiea', 97)
weightMap.set('gbyvdfh', 155) // av outgrundliga anledningar fanns dessa ej i weightmap och gav NaN till allt

const childMap = new Map(onlyWords
  .map(x => [x[0], x.slice(1).reduce((acc, curr) => acc.concat(curr), [])]))


const totalWeight = function (node) {
  let children = childMap.get(node)

  if(children.length === 0){
    return weightMap.get(node)
  }

  let childWeight = [];
  let weight = 0;
  for(let i = 0; i < children.length; i++){
    let w = totalWeight(children[i])
    childWeight.push(w)
    weight += w
  }

  if(childWeight.length > 0){
    if(weight !== childWeight[0]*childWeight.length){
       console.log(node + " my children weigh " + childWeight)
    }
  }
  return weight + weightMap.get(node)
}

totalWeight(topNode[0])


//Then walk backwards in the table