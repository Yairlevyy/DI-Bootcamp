// 🌟 Exercise 1: Timer
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>


// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// setTimeout(alertHello, 2000);

// function alertHello() {
//     alert("Hello");
// }

// let div = document.getElementById("container");

// setTimeout(addPar, 2000);

// function addPar() {
//     let newPar = document.createElement("p");
//     let text = document.createTextNode("Hello World");
//     newPar.appendChild(text);
//     div.appendChild(newPar);
// }

// let timer = setInterval(addFivePar, 2000);

// let counter = 0;

// function addFivePar() {
//     let newPar = document.createElement("p");
//     let text = document.createTextNode("Hello World");
//     newPar.appendChild(text);
//     div.appendChild(newPar);
//     counter++;

//     if (counter == 4) {
//         clearInterval(timer);
//     }
// }

// let button = document.getElementById("clear");

// button.addEventListener("click", clear);

// function clear() {
//     clearInterval(timer);
// }




// 🌟 Exercise 2 : Move The Box
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #container {
//           width: 400px;
//           height: 400px;
//           position: relative;
//           background: yellow;
//         }
//         #animate {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <p><button onclick="myMove()">Click Me</button></p>
//         <div id="container">
//           <div id="animate"></div>
//         </div>
//     </body>
//     </html>


// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// function myMove() {
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id)
//         } else {
//             pos++;
//             elem.style.left = pos + 'px';
//         }
//     }
// }






// 🌟 Exercise 3: Drag & Drop
// Instructions
// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         #target {
//           width: 200px;
//           height: 200px;
//           position: relative;
//           background: yellow;
//         }
//         #box {
//           width: 50px;
//           height: 50px;
//           position: absolute;
//           background-color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="target"></div>
//         <br>
//         <div id="box"></div>
//     </body>
//     </html>


// Copy the code above, to a structured HTML file.
// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target. Check out the Course Notes named DOM animations.

let item = document.getElementById("box");

item.addEventListener("dragstart", startDragging);

function startDragging (evt) {
    evt.dataTransfer.setData("text/plain", evt.target.id)
}

let dropZone = document.getElementById("target");

dropZone.addEventListener("drop", dropping);

function dropping(evt){
    evt.preventDefault();
    let dataNeeded = evt.dataTransfer.getData("text/plain");
    let box = document.getElementById(dataNeeded);
    evt.target.appendChild(box)
}

