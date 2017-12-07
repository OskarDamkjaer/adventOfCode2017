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

const result = allWords.filter(x => !notTopLevel.has(x)) //Hitta värdet som finns i ena men inte andra

console.log(result)

// Part two!

