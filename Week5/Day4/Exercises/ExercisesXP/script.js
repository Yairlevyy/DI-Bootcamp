// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));

async function convert() {
	let response = await fetch("https://www.swapi.tech/api/starships/9/")
	let objName = await response.json(); 
	let result = await objName;
	return result
}




// 🌟 Exercise 2: Analyze
// Instructions
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?

The output will be a promise because result call a function that return a promise without convert it to an js object (with .json() and then).