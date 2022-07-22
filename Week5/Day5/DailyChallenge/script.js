// ADD THE CURRENCY TO THE FORM

(async function() {

	const result = await fetch("https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes")
	const response = result.json()
	const object = await response;
	const array = object["supported_codes"]
	from(array);
	to(array)

})();

function from(array) {

	let from = document.getElementById("from");


	for (devise of array) {
	let option = document.createElement("option");
	option.setAttribute("value", devise[0]);
	let text = document.createTextNode(`${devise[0]} - ${devise[1]}`);
	from.appendChild(option);
	option.appendChild(text)
}
}

function to(array) {

	let to = document.getElementById("to");


	for (devise of array) {
	let option = document.createElement("option");
	option.setAttribute("value", devise[0]);
	let text = document.createTextNode(`${devise[0]} - ${devise[1]}`);
	to.appendChild(option);
	option.appendChild(text)
}
}

// *****************************************************************************
// FETCH THE API TO CONVERT THE AMOUNT INSIDE THE INPUT

let form = document.getElementById("form");
form.addEventListener("submit", convert);

function convert(event) {
	event.preventDefault();
	
	getAmount();
}

async function getAmount() {

	let fromCurr = form.from.value;
	let toCurr = form.to.value;
	let amount = form.amount.value;

	const result = await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${fromCurr}/${toCurr}/${amount}`)
	const response = result.json();
	const object = await response;
	displayResult(object, toCurr)
}

function displayResult(object, currency) {
	let div = document.getElementById("amountCon");
	div.innerHTML = "";
	let amountConv = object["conversion_result"];
	let text = document.createTextNode(`${amountConv} ${currency}`);
	div.appendChild(text)


}