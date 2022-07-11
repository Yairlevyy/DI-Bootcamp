// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const sum = (x, y) => x + y




// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// function convertor(weight){
// 	let weightInGrams = 1000*weight
// };

// convertor(10);

// const convertor = function(weight) {
// 	let weightInGrams = 1000*weight
// };

// convertor(10);

// // Function declaration can be call before the function was declared.

// const convertor = (weight) => let weightInGrams = 1000*weight;

// convertor(10);




// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function (children, partner, location, job) {
// 	let text = document.createTextNode(`You will be a ${job} in ${location}, and married to ${partner} with ${children}`);
// 	let p = document.createElement("p");
// 	p.appendChild(text);
// 	document.body.appendChild(p)

// });




// // 🌟 Exercise 4 : Welcome
// // Instructions
// // John has just signed in to your website and you want to welcome him.

// // Create a Bootstrap Navbar in your HTML file.
// // In your js file, create a self invoking function that takes 1 argument: the name of the user that just signed in.
// // The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// (function(username) {
// 	let navbar = document.getElementById("navbar");
// 	let div = document.createElement("div");
// 	navbar.appendChild(div);
// 	let text = document.createTextNode(username);
// 	div.appendChild(text);
// 	let img = document.createElement("img");
// 	img.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
// 	img.style.width = "2em";
// 	img.style.height = "2em";
// 	navbar.appendChild(img)

// })("Yair");




// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

// PART ONE
// function makeJuice(size) {
// 	function addIngredients(inone, intwo, inthree) {
// 		let text = document.createTextNode(`The client wants a ${size} juice, containing ${inone}, ${intwo}, ${inthree}.`);
// 		document.body.appendChild(text);
// 	}

// 	addIngredients("banana", "mango", "orange");

// }

// makeJuice("small");


// PART TWO
// function makeJuice(size) {
// 	let ingredients = [];

// 	function addIngredients(inone, intwo, inthree) {
// 		ingredients.push(inone, intwo, inthree);
// 	}

// 	addIngredients("banana", "mango", "orange");
// 	addIngredients("banana", "mango", "orange");

// 	// NOT WORKING...
// 	function displayJuice() {
// 		let sentence = `The client wants a ${size} juice, containing`
// 		ingredients.forEach((ingredient) => {
// 		let sentence += `${ingredient}`}
// 		document.body.appendChild(sentence)
// 	}

// 	displayJuice();



// makeJuice("small");

