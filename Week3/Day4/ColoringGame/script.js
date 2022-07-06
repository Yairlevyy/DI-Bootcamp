// let arrayColors = ["red", "orange", "gold", "yellow", "green", "lightgreen", "darkgreen", "turqoise", "lightblue", "lightviolet", ];
// you can use an array rgba colors or hex colors

// Generate an array of 21 random colors.

let arrayColors = [];
while (arrayColors.length < 22) {
    arrayColors.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}

// random number generator
function rand(frm, to) {
    return ~~(Math.random() * (to - frm)) + frm;
}


function addColors (){
	let palletSection = document.getElementById("pallet")
	for(let color of arrayColors){
		let divColor = document.createElement("div");
		divColor.style.backgroundColor = color;
		palletSection.appendChild(divColor);
		divColor.addEventListener("click", pickColor)
	}
}


addColors();

function addGrid () {
	let height= 40;
	let width= 40;
	let gridPaintSection = document.getElementById("gridPaint")
	for (let i = 0; i<height*width; i++){
		let divColor = document.createElement("div");
		gridPaintSection.appendChild(divColor)
	}

}

addGrid();

let colorPicked;

function pickColor(evt){
	colorPicked = evt.target.style.backgroundColor;
	console.log(colorPicked)
}

let divGridPaint = document.querySelectorAll("#gridPaint div");

function clickedChange() {
	let mouseDown = 0;
	document.body.onmousedown = function() { 
 	 ++mouseDown;
	}
	document.body.onmouseup = function() {
  	--mouseDown;
	}
	for (div of divGridPaint) {
		div.addEventListener("click", function(evt) {
			evt.target.style.backgroundColor = colorPicked;
		});
		div.addEventListener("mouseover",function(evt) {
			if (mouseDown){evt.target.style.backgroundColor = colorPicked;}
		});
	}
}

clickedChange();

// CLEAR BUTTON 

let btn = document.getElementById("clearbtn");

btn.addEventListener("click", clearALL);

function clearALL() {
	for (div of divGridPaint) {
		div.style.backgroundColor = "white";
	}
}

