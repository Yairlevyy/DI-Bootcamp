// Exercise 1:
// Create a program to retrieve the data from the API URL provided above. Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");

xhr.responseType = "json";

xhr.send();

xhr.onload = function() {
	if (xhr.status !== 200){
		console.log("error")
	} else {
		console.log(xhr.response)
	}
}




// Exercise 2:
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

const xhrsun = new XMLHttpRequest();

xhrsun.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");

xhrsun.responseType = "json";

xhrsun.send();

xhrsun.onload = function() {
	if (xhrsun.status !== 200){
		console.log("error")
	} else {
		console.log(xhrsun.response)
	}
}


xhrSun.open("GET", "")
