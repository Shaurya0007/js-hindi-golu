let a = 300
const b = 200
var c = 100
                                   //globle scope
// console.log(a);
// console.log(b);
// console.log(c);


if (true){
    let a = 10
    let b = 200                       // block scope 
    const d = 500

    var c = 10 

    console.log("inner: ", a)
}

// console.log(c)
console.log(b)
console.log()

// nasted scope



function one (){
    const username = "hitesh"

    function two  () {
        const website = "youtube "
        console.log(username)
    }
     //console.log(website);
    two()
}
one()





//if namsted 


if (true){
    const username = "hitesh"

    if(username==="hitesh"){
        const website = " youtube"

        console.log(username+website)
    }
}




// scopes




var z = 20  //globale scope {}


if (true){
    
let   x   =   12
const y   =   13         // localscope {}
var   z   =   16

    console.log(x)
    console.log(y)
    console.log( "result " , z)
}

 //console.log(y)



// ++++++++++++++++++++++++ INTRESTING ++++++++++++++++++++  



// only function


function addone (num1){
    return  num1 + 1
}
console.log(addone(5))



// method functiton ( expration)
const x = function(jod1){
    return jod1 + 2
}
console.log(x(5))