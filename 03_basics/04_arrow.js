/////////////////////////////////////// ARROW FUNCTION  ()=>{}  ///////////////////////////////////////////


// EXPLICITE RETURN  => this function we use to curly breses and  retun keyword  

const code = (num1,num2)=>{
    console.log("hitesh" )
  return num1 + num2
  
  
}
console.log(code(6,6))


// IMPLICITE RETURN => in this function we can not use to curly breses

const code2 = (num1,num2)=>(num1+num2) 

console.log(code2(5,8))


const code3 = (num1,num2) => num1+num2
console.log(code3(8,9))



//OBJECT_IMPLICETE_RETURN => IN this object we use to curly bresses and simplr brackte 


const xy = (one,two ) => ({one,two})
console.log(xy(5,8))


// 2nd method  
const obj = (one, two ) => ({username:"hitesh "})

console.log(obj(6,5))



const myNewObject = (num1,num2)=> ({username : "golu "})
console.log(myNewObject(5,6))



//////////////////////////////practice scope ////////////////////////////////////////////


function one (){
  const username = "hitresh "
  function two (){
      const website = "youteube "

    console.log(username + website)
  }
  two()
}
one()


if (true ) {
  const username = "hitesh "
  if (username === "hitesh " ){
      const website = "instagram "
      console.log(username+website)
  }

}



// implicite returen function 

const zx = (num1,num2) => ({username:"hitesh ", contactno: 6206807909,email:"ads1234@gmail.coom"})

console.log(zx(5,6))



// () => {}


const CHAI =  (NUM,NUM2)=>(NUM+NUM2)

console.log(CHAI(5,6))


// (){}


const CHAI2 = (NUM , NUM2)=>{ 
     return NUM + NUM
  }
  console.log(CHAI2(6,5))


  const chai3 = ()=>({username: "golu ",  email  : "adslskhd1246@2sd56"})

 console.log(chai3())



 if (true) {
  const username = "hitesh"
  if (username=="hitesh"){
      const website = "youtube"
      console.log(`${username} ${website}`)
  }
 }





 if (true){
  const ram = "username "
  if (ram == "username "){
      const youtube = "website "
      console.log(ram+youtube)
  }

 }

// hosting

 const hitesh = {
  name : "xyz",
  prise : 999,

  welcoemessgae : function(){
      console.log(`username ${this.name},prise ${this.prise}`)
  }
 }
hitesh.welcoemessgae()
hitesh.name = "same "
hitesh.welcoemessgae()



function one (){
  const ram = "username "
  function two(){
      const youtube = "website "
      console.log(ram+ youtube)
  }
  two()

}
one()

const objProps ={
  name : "hitesh ",
  id : "@1234",
  email: "ads2hjsgdj.ai"

}
function objecthandle (anyobje2){
  console.log(`usenmame ${anyobje2.name}, id ${anyobje2.id}, and email${anyobje2.email}`)


}
objecthandle(objProps)
console.log(objecthandle({
  name: "golu",
  id : "3214@",
  email : " jsakdg@ksla12.com"
}))





// const ramjee = 41
// const  lakshumanjee = 32
// if (ramjee === lakshumanjee){
//     console.log("ram is eaqal to lakshuman")
// }else {
//     console.log("laxuman is samllertah ram")
// }


const xx = (function(){
  console.log(`db coonected `)
}) () ;


(function xx2 (){
  console.log(`db coonnected two`)
})() ;


(function xx3 (name){
  console.log(`db cooonected 3 ${name}`)
}) ("hitesh")



function nx (z1,z2){
  return z1 + z2

}
console.log(nx(6,5))


const ram = (z1, z2 ) => {
  return z1 +z2 
}
console.log(ram(3,5))

const ram2 = (num1,num2)=>(num1+num2)
console.log(ram(7,5))


const soft = ()=>({id : "hitesh", address : "bengluru" })

console.log(soft())


