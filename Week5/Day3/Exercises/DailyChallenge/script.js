// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

const makeAllcaps = (arr) => {
	return new Promise((resolve, reject) => {
		if(arr.every(typeof == 'string')) {
			resolve(arr.every.toUpperCase)
		} else {
			reject(console.log("Sorry, it's not an array..."))
		}
	})
};



const sortWords = (arr) => {
	return new Promise((resolve, reject) => {
		if(arr.length > 4) {
			resolve(arr.sort())
		} else {
			reject(console.log("Sorry, it's not an array..."))
		}
	})
};
