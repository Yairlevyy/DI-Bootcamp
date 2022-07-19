🌟 Exercise 1 : Comparison
Instructions
Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than 10
the promise rejects if argument is greater than 10.

const compareToTen = (num) => {
	return new Promise((resolve, reject) => {
		if(num < 10) {
			resolve(console.log(num))
		} else {
			reject(console.log(num))
		}
	})
};



🌟 Exercise 2 : Promises
Instructions
Create a promise that resolves itself in 4 seconds and returns a “success” string.
How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
Add code to catch errors and console.log ‘Ooops something went wrong’.

let success = "success";
const successFunc = (num) => {
	return new Promise((resolve,reject) => {
	setTimeout(() => {
		if (typeof success == 'string') {
			resolve(console.log(success))
		} else {
			reject(console.log("error"))
		}
	}  ,4000)
})
}

successFunc.catch(() => console.log("Ooops something went wrong"));

// By using Promise.resolve :

const successFunc = Promise.resolve("success")
successFunc.then((value) => console.log(value));




🌟 Exercise 3 : Resolve & Reject
Instructions
Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”;

const resolve = Promise.resolve(3);

const reject = Promise.reject("Boo!");
