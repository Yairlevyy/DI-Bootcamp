// Exercise 1 : Play A Guessing Game
// Instructions
// Create a new folder on your computer.
// Clone or Download the index.html and style.css files from this github link.
// Follow the steps written below


// Steps
// Explanation of the game : the point of the game is to guess the number that the computer has in “mind”.

// First Part
// Create a JS file and link it to the index.html file.

// Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
// We will learn more about events next week ;)


// Now let’s create the function:

// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.


// function playTheGame() {

//   let text = "Would you like to play the game?";
//   if (confirm(text) == false) {
//     alert("No problem, Goodbye.");
//   } else {
//   	let userNumber = prompt("Please enter a number between 0 and 10")

//   	if (isNaN(userNumber)) {
//   		alert("Sorry Not a number, Goodbye")
//   	} else if (userNumber < 0 || userNumber > 10) {
//   		alert("“Sorry it’s not a good number, Goodbye”.")
//   	} else {
//   		let computerNumber = getRandom(0, 10)
//   		console.log(computerNumber)
//   		console.log(userNumber)
//   	}
//   }
// }


// function getRandom(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min +1)) + min;
// }



// Second Part


// Second Part
// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.



// function win() {
//   alert("WINNER")
// }


// function bigger() {
//   alert("Your number is bigger then the computer’s, guess again")
//   prompt("Please enter a number between 0 and 10")
// }


// function smaller() {
//   alert("Your number is smaller then the computer’s, guess again")
//   prompt("Please enter a number between 0 and 10")
// }


// function path() {
//     if (userNumber === computerNumber) {
//     alert("WINNER")
  


//   } else if (userNumber > computerNumber) {

//     bigger()


//   } else {

//     smaller()


//   }
// }


// function pathtwo() {
//     if (userNumber === computerNumber) {
//     alert("WINNER")
  


//   } else if (userNumber > computerNumber) {

//     bigger()
//     lastchance()


//   } else {

//     smaller()
//     lastchance()
//   }
// }


// function lastchance() {
//      if (userNumber === computerNumber) {
//         alert("WINNER") 
//         } else {
//         alert("out of chances")
//         }
// }


// function compareNumbers(userNumber,computerNumber) {
	
//   if (userNumber === computerNumber) {
// 		return alert("WINNER")
	
//   } else if (userNumber > computerNumber) {
//     path()
//     pathtwo()


//   } else {
//     path()
//     pathtwo()

//   }
		 
// }




