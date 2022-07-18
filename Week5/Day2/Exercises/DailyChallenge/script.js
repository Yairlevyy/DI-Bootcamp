let form = document.getElementsByTagName("form")[0];

let button = document.getElementById("button")

button.addEventListener("click", generate)

function generate() {
	event.preventDefault();

	let value = form.category.value;

	const xhr = new XMLHttpRequest();

	xhr.open("GET", `https://api.giphy.com/v1/gifs/search?q=${value}&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

	xhr.responseType = "json";

	xhr.send();

	xhr.onload = function() {
		let div = document.getElementById("div");
		if (xhr.status !== 200){
			let p = document.createElement("p");
			let text = document.createTextNode("Sorry, an error occured. Please try again later");
			p.appendChild(text);
			div.appendChild(p)
		} else {
				let object = xhr.response;
				let img = document.createElement("img");
				img.src = object["data"][0]["images"]["480w_still"]["url"];
				let button = document.createElement("button");
				button.textContent = "Delete all";
				button.addEventListener("click", () => img.style.display = "none");
				div.appendChild(img);
				div.appendChild(button)
		}
	}

}


