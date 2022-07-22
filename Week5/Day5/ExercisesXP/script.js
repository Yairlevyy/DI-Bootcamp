let button = document.getElementById("button");
button.addEventListener("click", retrieveCharacter);

let div = document.getElementById("div");

async function retrieveCharacter() {

	deleteAll();

	let randomNum = Math.floor(Math.random() * (83 - 1 + 1) + 1);
	
	try {
		const result = await fetch(`https://www.swapi.tech/api/people/${randomNum}`)

		if (result.status !== 200) {
			throw new Error ("Oh No! That person isn't available.")
		} else {
			// removeLoading();
			const response = await result.json();
			displayName(response);
			displayData(response);
		}

	} catch(error) {
		let h3 = document.createElement("h3")
		let text = document.createTextNode(error.message)
		h3.appendChild(text);
		div.appendChild(h3)
	}



}

function deleteAll() {
	// displayLoading()
	Array.prototype.slice.call(document.getElementsByTagName('h2')).forEach(
		function(item) {
			item.remove();
		})

	Array.prototype.slice.call(document.getElementsByTagName('h3')).forEach(
		function(item) {
			item.remove();
		})
}

function displayLoading() {
	let loader = document.getElementById("loading");
	loader.style.display = "block"
}

function removeLoading() {
	let loader = document.getElementById("loading");
	loader.style.display = "none"
}

function displayName(object) {
	let h2 = document.createElement("h2")
	let text = document.createTextNode(object["result"]["properties"]["name"])
	h2.appendChild(text);
	div.appendChild(h2)
}

function displayData(object) {
	let data = ["height","gender","birth_year"];
	data.forEach((elem) => {
		let h3 = document.createElement("h3")
		let text = document.createTextNode(`${elem}: ${object["result"]["properties"][elem]}`)
		h3.appendChild(text);
		div.appendChild(h3)
	})
}

