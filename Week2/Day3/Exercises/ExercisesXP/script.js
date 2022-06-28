// 🌟 Exercise 1 : List Of People
// Instructions

// Part I - Review About Arrays

// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// let people = ["Greg", "Mary", "Devon", "James"];

// people.shift()

// people[2] = "Jason"

// people.push("Yair")

// console.log(people.indexOf("Mary"))

// console.log(people)



// // Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name.
// // Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// // Hint: Check out the documentation for the slice method

// // console.log(people.slice(1))


// // Write code that gives the index of “Foo”. Why does it return -1 ?

// // console.log(indexOf("Foo"))
// // He return -1 because "Foo" doesn't exist in the array and it mean false.


// // Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?

// // let last = people[people.length-1]
// // console.log(last)



// // Part II - Loops
// // Using a loop, iterate through the people array and console.log each person.

// // for (person in people) {
// //     console.log(people[person])
// // }

// // Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// // Hint: take a look at the break statement in the lesson.

// let indexJason = people.indexOf("Jason")

// for (let i = 0; i != indexJason; i++) {
// 	console.log(people[i])
// }




// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// let colors = ["Blue", "Turquoise", "Green", "Yellow", "Orange"]

// for (i = 0; i < colors.length; i++) {
// 	console.log(`My #${i} choice is ${colors[i]}`)
// }




// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

// let number;

// do {
//     number = prompt("Choose a number")
//     console.log(number)
// } while (number < 10)




// 🌟 Exercise 4 : Building Management
// Instructions:
// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }

// console.log(building["numberOfFloors"])

// console.log(building["numberOfAptByFloor"]["firstFloor"], building["numberOfAptByFloor"]["thirdFloor"] )

// console.log(building["nameOfTenants"][1], building["numberOfRoomsAndRent"]["dan"][0])

// let sarahRent =  building["numberOfRoomsAndRent"]["sarah"][1]
// let danRent =  building["numberOfRoomsAndRent"]["dan"][1]
// let davidRent =  building["numberOfRoomsAndRent"]["david"][1]

// if (sarahRent + davidRent > danRent) {
// 	danRent = 1200
// }

// console.log(danRent)




// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

// let family = {
// 	mom:"Rivka",
// 	dad:"Itshak",
// 	son:"Jacob"
// }

// for (let keys in family) {
// 	console.log(keys)
// 	console.log(family[keys])
// }




// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }

// for (let sentence in details) {
// 	console.log(sentence, details[sentence])
// }




// Exercise 7 : Secret Group
// Instructions
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// names.sort()

// for (let name of names) {
// 	console.log(name[0])
// }
