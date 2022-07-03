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

let SolarSystem = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

for (let i = 0; i < solarSystem.length; i++) {
	let solarSystem[i] = document.createElement(div);
	solarSystem[i].classList.add('planet', solarSystem[i]);
}

let SolarSystemColors = ["Grey", "Brown", "Blue", "Red", "Orange", "Gold", "Lightblue", "darkblue"];

for (let i = 0; i < solarSystem.length; i++) {
	div.solarSystem[i].style.backgroundColor = SolarSystemColors[i];
}


let section = document.getElementsByTagName('section');


for (let i = 0; i < solarSystem.length; i++) {
	section.appendChild(solarSystem[i]);
}





