const myArr = [0,1,2,3,4,5]

const myArr_01 = [12,13,"Anurag",true]
const myHeros = ["shaktiman","nagaarjun"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr_01)
// console.log(myArr2)
// console.log(myArr[1])
//Shallow copy -> 
//Deep copy -> A deep copy of an object is a copy whose properties do not
//             share the same references.
//Methos in Array:

// myArr.push(78,56,89,12,14)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(90)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)



//Some methods in array are question air methods jo T/F me value  

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()
// console.log(typeof(newArr))
// console.log(myArr)


//slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log("C",myArr)
console.log(myn2)