# Projects relateded to Dom (project 1)

## Project link 
[click here](https://stackblitz.com/edit/web-platform-leufeb?file=chaiaurcode.js,index.html,styles.css) 


## javascript code (salution code)
```javascript
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

## html 
```html <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="styles.css" />
    <!-- <link rel="stylesheet" href="../style.css" /> -->
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page"> Home </a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >youtube chenel
      </a>
    </nav>
    <div class="cavas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>COLOR SWICHER | theme swicher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>

      <h2>
        try clickinig on one of the color above
        <span> to cajhne the background color of this papge </span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```

## css  
```css
html {
  margin: 0;
}

span {
  display: block;
}

.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background-color: gray;
}

#white {
  background-color: white;
}

#blue {
  background-color: blue;
}

#yellow {
  background-color: yellow;
}

#purple{
  background-color: purple;
}
```