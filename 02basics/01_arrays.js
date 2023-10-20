// //types of arrays 
// //type 1 -: trget aligment types

const myarray = [0,1,2,3,4,5,6,7,8,9]

console.log(myarray[2]);

 //ytppe two -: (run type)

const myHeros = ["shaktiman","nagraj","krish"]
console.log(myHeros)


//type 3 :-(object types)

const myArray2 = new Array(1,2,3,4,5,6,7,89,4,5,5)
console.log(myArray2 [1])

console.log(myArray2.includes(5));
// MY ARRAYS METHOD

myarray.push(5)   //ADDING VALLY IS LAST 
myarray.push(10)    // "" ""
myarray.pop()       // REMOVED LAST VALLUE 
myarray.unshift(9)    // ADDING VALUE IN STRTS 

console.log(myarray)


const newarray3 = [1,2,,3,5,1,5,2,4,]

console.log (newarray3.includes(3))
 console.log(newarray3.includes(13))





let  sliceArrays = ['tom','tim','ton','sor','hitesh', 'golu']
console.log(sliceArrays.slice(1,3))

sliceArrays.splice(1,3, 'hi') //  splice is replesing (1 se 3 ko hta ke wha pe "hi" ka vallue put kr ) value when you passed the item like (1,3),(1,2 'hi') and orignal value change 
console.log(sliceArrays)


console.log("A" , myarray) 
const myna1 = myarray.slice(1,3)
console.log(myna1)

console.log("B" , myarray);

const myna2 = myarray.splice(1,3,)
console.log(myna2);s