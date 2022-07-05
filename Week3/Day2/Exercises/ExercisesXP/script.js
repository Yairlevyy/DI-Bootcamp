// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// 1. Using a DOM property, retrieve the h1 and console.log it.

// 2. Using DOM methods, remove the last paragraph in the <article> tag.

// 3. Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


// let h1 = document.getElementsByTagName('h1')[0];
// console.log(h1);

// let article = document.querySelector('article');
// article.removeChild(article.lastElementChild);

// let h2 = document.getElementsByTagName('h2')[0];

// h2.onclick = function() {
//     h2.style.backgroundColor = 'red';
// }

// let h3 = document.getElementsByTagName('h3')[0];

// h3.onclick = function() {
//     h3.style.display = 'none';
// }


// let p = document.getElementsByTagName('p');

// Array.from(p);

// console.log(p);

// let button = document.getElementsByTagName('button')[0];

// button.onclick = function() {
//     for (item of p) {
//         item.style.fontWeight = 'bold';
//     }
// }




// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty, #ADD ON THE HTML FILE REQUIRED INSIDE THE TAG.
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// let form = document.forms[0];

// console.log(form);

// let firstName = form.elements.fname;

// console.log(firstName);

// let lastName = form.elements.lname;

// console.log(lastName);

// // let firstByName = document.getElementsByName('fname')[0];

// // console.log(firstByName);

// // let lastByName = document.getElementsByName('lname')[0];

// // console.log(laststByName);

// form.addEventListener('submit', addToList)

// function addToList() {
// 	event.preventDefault(); //To prevent from submitting the form.
// 	let value = [form.elements.fname.value, form.elements.lname.value]
// 	let ul = document.getElementsByClassName("usersAnswer")[0];
// 	for (let i = 0; i < value.length; i++) {
// 		let li = document.createElement("li")
// 		let text = document.createTextNode(value[i]);
// 		li.appendChild(text);
// 		ul.appendChild(li)
// 	}
// }




// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// 1. Declare a global variable named allBoldItems.

// 2. Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// 3. Create a function called highlight() that changes the color of all the bold text to blue.

// 4. Create a function called return_normal() that changes the color of all the bold text back to black.

// 5. Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


// let allBoldItems;

// function getBold_items() {
// 	allBoldItems = document.getElementsByTagName('strong');
// }

// function highlight() {
// 	for (item of allBoldItems) {
// 		item.style.color = "blue";
// 	}
// }

// function return_normal() {
// 	for (item of allBoldItems) {
// 		item.style.color = "black";
// 	}
// }

// getBold_items();
// Array.from(allBoldItems)

// for (item of allBoldItems) {
// 	item.addEventListener('mouseover', highlight);
// 	item.addEventListener('mouseout', return_normal);
// }




// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 

// let form = document.forms[0];

// form.addEventListener("submit", calculate);

// let radiusValue = form.elements.radius.value;


// let volumeValue = form.elements.volume.value;

// function calculate() {
// 	event.preventDefault();
// 	let radiusValue = form.elements.radius.value;
// 	console.log(radiusValue);
// 	let volumeValue = form.elements.volume.value;
// 	let CalcVolumeValue = (radiusValue*radiusValue*radiusValue)*(4/3)*3.14;
// 	console.log(CalcVolumeValue);
// }




// Exercise 5 : Event Listeners
// Instructions
// 1. Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// 2. Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.


// let h1 = document.getElementsByTagName('h1')[0];

// h1.addEventListener('click', RespondClick)

// function RespondClick() {
//     h1.style.color = 'red'
// }

// h1.addEventListener('mouseover', RespondMouseOver)

// function RespondMouseOver() {
//     h1.style.fontSize = '50px'
//     h1.style.backgroundColor = 'yellow'
// }

// h1.addEventListener('mouseout', RespondMouseOut)

// function RespondMouseOut() {
//     h1.style.fontSize = '25px'
//     h1.style.backgroundColor = 'black'
// }

// h1.addEventListener('dblclick', RespondDblClick)

// function RespondDblClick() {
//     h1.style.padding = '20px'
// }