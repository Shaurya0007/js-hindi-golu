// //singlton method

// const myOBJ = {}
// myOBJ.name = "hitesh ",
// myOBJ.email =  " hitesh@microsoft.com ",
// myOBJ.isLoggedIn =  true,
// myOBJ.lastLoggedIn = ["monday", "satrday"]


// console .log(myOBJ)


// const newObject  = {
//     email: "hiteshmicrosoft@gmail.com" ,
//     username:{
//         userfullname:{
//             firstname: "hitesh",
//             lastname : "rajput",
//             contact : {
//                 mobile: "2045846754",
//                 phone : "061822356897",

//             }
//         }

//     }
// } 

// console.log(newObject.username.userfullname["contact"])


// // merz oobjects in one objects 

// const dist1 = {1:"arrah ", 2:"buxar"}
// const dist2 = { 3 :"chapra", 4: "rajgir"}
// const dist3 = { 5:"motihaari",6: "siwan"}

// //merz by spered method 

// const alldist = {...dist1,...dist2,...dist3}
// console.log(alldist)

// // merz asign method

// Object.assign({},dist1,dist2,dist3)
// console.log(alldist)



// // when value comes to databassed
// const newobj2 = [
//     {
//         id :"123",
//         email : "golumicrosoft.com"
//     },
//     {
//         id : '456',
//         email : "dshoih@dmfnldotcom"
//     }
// ]
// newobj2[1].email = "dkhfsl@vldjkf"
// console.log(newobj2)


// // importent method 

// console.log(myOBJ)
// console.log(Object.keys(myOBJ))
// console.log(Object.values(myOBJ))
// console.log(Object.entries(myOBJ))


// console.log(myOBJ.hasOwnProperty('isLoggedIn'))
// console.log(myOBJ.hasOwnProperty("lastLoggedIn"))
// console.log(myOBJ.hasOwnProperty("islogiin"))
// console.log(myOBJ.hasOwnProperty('lasatmobiquick'))


// console.log(Array.isArray9["isLoggedIn"])





let lecture = 10
let section = 3
const title  = 'javascript'


// OBJECT DE STRUCTURING
 
const course= {
    coursename: "js ",
    fees : 500,
    courseinstructore: "hitesh choudhary"


 }

 course.courseinstructore

 console.log(course)
 const {courseinstructore } = course  //value extract 

  console.log (courseinstructore)

// when chnage property name 

//  const {courseinstructore:instrucctore } = course

//  console.log( instrucctore)