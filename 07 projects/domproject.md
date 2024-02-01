# project related to dom 

## project link
[click here](https://stackblitz.com/edit/web-platform-brzvlj?file=chaiaurcode.js)

# solution code 
## project 1
```javascript
console.log('Hello!');
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id ==='grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id ==='white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id ==='blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id ==='yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id ==='purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})




 ```

 ## project solutuion code  2 


 ```javascript
 const form = document.querySelector('form')
//  this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();


    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt (document.querySelector('#weight').value);
    const result = document.querySelector('#results')


    if(height === ''|| height < 0 || isNaN(height)){
        result.innerHTML=`please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
         result.innerHTML= `plese give a valide weight${weight}`;
    } else {
        const Bmi = (weight / ((height * height) /10000).toFixed(2));
        //show the reslut 
        result.innerHTML= `<span>${Bmi}</span>`;
    }

     
});

 ```

 ## project sulution code 3


 ```javascript
 const clock = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function(){
    let date = new Date
    // console.log(date.toLocaleTimeString());
    clock.innerHTML  = date.toLocaleTimeString()

},1000) 

```








