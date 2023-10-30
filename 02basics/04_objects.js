// // //singletone method

// const tinderuser1 = new Object()
// console.log(tinderuser1)



 const tinderuser2 = {}


 tinderuser2.id = "01234hitesh" 
 tinderuser2.email = "bjakjsbdkjb2gmil.com"
 tinderuser2.isLoggedIn = true
 tinderuser2.lastLoggedIn = ["monday " , "satday"]


// console.log(tinderuser2)



// const regularUsar = {

//     email : "122gsh@gmail.com",
//     username :{
//         firstname : "golu",
//         lastname : "Rajput",
//          contct :{
//             mobile :65464,
//             std : 315463
//          }

//     }
//  } 


// console.log(regularUsar.username.contct
//     )



//     const user1 = {1 : "ara" , 2 : "bhojpur"}
//     const user2 = {3 : "chapra" , 4 : "buxur" }
//     const user3 = {...user1,...user2}
 
// console.log(user3)



// const  newuser = {
//     email : "dbdauybaub@dacj.com",
//     username :{
//         userfullname:{
//             firstname : "hitesh",
//             lastname : "chaudhary",
//                usrecontact:{
//             mobile : 6206807909,
//             email : "vhdgn@vhjgf.com",

//          useraddresh :{
//               permanet : {
//                     vill: "sanjoel",
//                     pin : "802316",

//                crosspondance :{
//                     vill : "sanjoel",
//                     post : "sinha"

//                         }
//                     }

//                 }

//             }
//         }
//     }
// }


// console.log(newuser.username.userfullname.usrecontact.useraddresh)



// const  xyzObj = {

//     xyzname : {
//         firstname1 : "hitesh",
//         lastname : "kdfhl",
//         contact :{
//             phone : "03659716",
//             mobile : "458789546",
//         }
//     }
// }
// console.log(xyzObj.xyzname.contact.phone)




// const abc = { 1 : "arrah" , 2 : "Bhojpur" }
// const efg = { 3 : "chapra " , 4 : "deoghar"}
// const ltr = { 5: "nalanda" , 6 : "rajgir"}
//  //const hij = { ...abc,...efg}
//  const mynewvalue = Object.assign({},abc,efg,ltr)

// console.log(mynewvalue)




const user = [
    {
        id : "1" ,
        email : "hitesh@gmail.com"
    },
    {
        id :" 2",
        email: "golu@gmil.com"
    }
]

user [1].email
console.log(tinderuser2)
console.log(Object.keys(tinderuser2))
console.log(Object.values(tinderuser2))
console.log(Object.entries(tinderuser2))

console.log(tinderuser2.hasOwnProperty('isLoggedIn'))
console.log(tinderuser2.hasOwnProperty('isLogged'))


console.log(Array.isArray('isLoggedIn'));