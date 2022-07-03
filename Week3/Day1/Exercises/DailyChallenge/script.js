// 1. Create an array which value is the planets of the solar system.

// 2. For each planet in the array, create a <div> using createElement. 
// This div should have a class named "planet".

// 3.Each planet should have a different background color. 
// (Hint: you could add a new class to each planet - each class 
// containing a different background-color).

// 4.Finally append each div to the <section> in the HTML 
// (presented below).

// [Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. 
// How should you display them?
// Should you still use an array for the planets ? 
// Or an array of objects ?]

let solarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

let solarSystemColors = ["Grey", "Brown", "Blue", "Red", "Orange", "Gold", "Lightblue", "darkblue"];

let section = document.getElementsByTagName('section')[0];

for (let i = 0; i < solarSystem.length; i++) {
	let planetDiv = document.createElement('div');
	planetDiv.classList.add('planet', solarSystem[i]);
	planetDiv.style.backgroundColor = solarSystemColors[i];
	section.appendChild(planetDiv);
}







