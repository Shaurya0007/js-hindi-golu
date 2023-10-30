

function sayMyName () {
    console.log("hi");
console.log("te");
console.log("sh");
console.log("ch");
console.log("ou");
console.log("dh");
console.log("ar");
console.log("y");
}

// sayMyName()
// 

function addTwoNumber (number1,number2){
    console.log(number1+number2)
}

 addTwoNumber(7,9)
 addTwoNumber(7,"6")
 addTwoNumber("7","6")
 addTwoNumber("7","6")
 addTwoNumber(7, 2)
 addTwoNumber("7", 6)
 addTwoNumber("7", null)
  addTwoNumber(7, null)
 addTwoNumber( false)


function saymyfullname (){
    console.log("hitesh")
    console.log ("choudhary")
    console.log("the")
    console.log("instroutore")
}

// // saymyfullname()

   function addingTwoNumbers5 (num3,num5){
     console.log(num3+num5)
 }
 addTwoNumber(78,5)

 // wrong method passing returen method

 const result = addingTwoNumbers5(78,59)
  console.log("result ",result)


// //right method of  fuction returen 





function addingSomeNumbers (special, normal) {
    let result2 = special + normal
    return result2
}

const result2 = addingSomeNumbers(89,78)
console.log("result ", result2)

//2nd method  of function returen

function returenspecialnumber (special1,normal2){
    return special1 + normal2
}

const result3 = returenspecialnumber(5,689)
console.log("result3", result3)






function userlloggedin (usename){

    return `${usename} , just logged in`
   

}
console.log(userlloggedin("hitesh"))
console.log(userlloggedin(" ")) // value is empty
console.log(userlloggedin())  // value is undefiend 


//when user logged in 

function usermessage (username){
    return `${username}  just logged in` 

}
console.log(usermessage(" hhitesh "))


//if condistionals


function useloggedinmessage (specialuser = "sam"){
     //if (specialuser){}
    if(specialuser === undefined){
        console.log(" please enter username" )
        return
    }
    return `${specialuser}   just logged in`

}

console.log(useloggedinmessage())


//! exclemetry mark is cheq true or, false 

function usermesseggedin (password = "1345adset@ "){
    if(!password){
        console.log('please enter your password')
     return
    }
    return `${password} just inter your password `
}

console.log(usermesseggedin())



 
function istgramUser (password = "password types"){
    if(password === undefined){
        console.log("please enter your password")
        return
    }
    return `${password} just logged in`
}

console.log(istgramUser("hitesh"))




// function user2 (username6 = "golu"){
//     if(username6===undefined){
//         console.log("plese enter your user name")
//         return
//     }
//     return `${username6} is just logged in `

// }
// console.log(user2())




function myfun (username = "hello" ){
     
    if(username == undefined){
    console.log('please enter your name ')
    return
    }
    return `${username} just logged in `


}
console.log(myfun("hitesh" ))



// function add (n1,n2){

//     let rex = n1+n2
//     console.log("hello")
//     return rex
// }
// const rex = add(5,6)
// console.log("result " ,rex)






function fbuser (username3,username5){
    console.log("hitesh")
      return  username3 + username5

}
 
const result5 = fbuser (6,8)
console.log("result ", result5)




function instuser (password3){

     if (password3===undefined){
         console.log("please inter yyuor name ")
         return
}
    return `${password3} just logged in `
}
console.log(instuser("jloh"))