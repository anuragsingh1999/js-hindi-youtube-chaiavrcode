// const name = `Anurag`
// console.log(name)
// const title ='Singh'
// console.log(title)
// const repoCount = 02
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Anurag')

// console.log(gameName[4])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'))

// const newString = gameName.substring(0,4)
// console.log(newString)

const newString = gameName.slice(-1,4)
console.log(newString)

const newStringOne = "     Anurag            "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://anurag.%20com"
console.log(url.replace('%20','-'))

console.log(url.includes('singh'))