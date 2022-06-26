// 🌟 Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

// Console.log I eat <favorite food> at every <favorite meal>

// For example

// If your favorite food is "chocolate", 
// and your favorite meal of the day is "dinner", 
// you will console.log 
// I eat chocolate² at every dinner


let myFavoriteFood = "Pizza"
let myFavoriteMeal = "dinner"

console.log(`I eat ${myFavoriteFood} at every ${myFavoriteMeal}`)


// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory


let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = `I watched ${myWatchedSeriesLength} series : `

console.log(myWatchedSeriesSentence + myWatchedSeries)

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

myWatchedSeries.splice(2, 1, "friends" )
myWatchedSeries.push("series")
myWatchedSeries.unshift("Favourite Series")
myWatchedSeries.splice(1, 1)
console.log(myWatchedSeries[1].charAt(2))

console.log(myWatchedSeries)



// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let celsius = 25;
let convertToFahrenheit = celsius/5*9+32

console.log(convertToFahrenheit)

console.log(`${celsius}°C is ${convertToFahrenheit}°F.`)




// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// For example

// console.log(2+3)
// // Prediction: It will output 5, because 2 and 3 are numbers
// // Actual: 5


// Using the code below:

    // let c;
    // console.log(c)
//     let a = 34;
//     let b = 21;

//     console.log(a+b) //first expression
//     // Prediction: It will output 55, because 34 and 21 are numbers.
//     // Actual: 55

//     a = 2;

//     console.log(a+b) //second expression
//     // Prediction: It will output 23, because we define a new value for the variable a : 2.
//     // Actual: 23



// What will be the outcome of a + b in the first expression ? 55

// What will be the outcome of a + b in the second expression ? 23

// What is the value of c? undefined

// Analyse the code below, what will be the outcome?
// // console.log(3 + 4 + '5');
// It will output 75 bcause 3 and 4 are numbers (so 7), then 5 is a string it will not be added as a normal mathematic addition but like an addition of characters.







// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// For example

// typeof("potato")
// // Prediction: Vegetable
// // Actual: String


// What is the output of each of the expressions below?


// console.log(typeof(15))
// // Prediction: number, because the typeof operator find the data type of a javascript variable.
// // Actual: number

// typeof(5.5)
// // Prediction: number, because the typeof operator find the data type of a javascript variable.
// // Actual: number

// typeof(NaN)
// // Prediction: number, because it's use when we use number and the we enter a value that is not a number, so it's a kind of JavaScript number.
// // Actual: number

// typeof("hello")
// // Prediction: string, a word between "".
// // Actual: string

// typeof(true)
// // Prediction: boolean, because the typeof operator find the data type of a javascript variable.
// // Actual: boolean

// typeof(1 != 2)
// // Prediction: number, because mains values are numbers.
// // Actual: Boolean, because the answer value will be true or false.

// "hamburger" + "s"
// // Prediction: "hamburgers" the answer will be a string that is composed by these two strings.
// // Actual: "hamburgers

// "hamburgers" - "s"
// // Prediction: NaN, because it's impossible to do - between two strings and it must be numbers.
// // Actual:NaN

// "1" + "3"
// // Prediction: 13, because the numbers are between ""
// // Actual:13

// "1" - "3"
// // Prediction:NaN
// // Actual:-2

// "johnny" + 5
// // Prediction:"johnny5"
// // Actual:"johnny5"

// "johnny" - 5
// // Prediction:NaN
// // Actual:NaN

// 99 * "hello"
// // Prediction:NaN
// // Actual:NaN

// 1 != 1
// // Prediction:false, because it's mean not equal wich is false.
// // Actual:false

// 1 == "1"
// // Prediction:true, because it's compare the values and not the types.
// // Actual:true

// 1 === "1"
// // Prediction:false, because it's compare also types and it's a number and string.
// // Actual:false.





// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// What is the output of each of the expressions below?


// 5 + "34"
// // Prediction: 534 because 34 it's string and not a number
// // Actual:534

// 5 - "4"
// // Prediction:1, because it will take the value inside the " if it's a number and if not it will be display NaN.
// // Actual:1

// 10 % 5
// // Prediction:
// // Actual:0

// 5 % 10
// // Prediction:
// // Actual:0

// "Java" + "Script"
// // Prediction:JavaScript
// // Actual:"JavaScript"

// " " + " "
// // Prediction:undefined
// // Actual:''

// " " + 0
// // Prediction:0
// // Actual:0

// true + true
// // Prediction:NaN, because true isn't number.
// // Actual:2

// true + false
// // Prediction:1, because true value 1 and false 0.
// // Actual:1

// false + true
// // Prediction:1, because true value 1 and false 0.
// // Actual:1

// false - true
// // Prediction:-1, because true value 1 and false 0.
// // Actual:

// !true
// // Prediction:undefined, because ! mean not.
// // Actual:false

// 3 - 4
// // Prediction:-1
// // Actual:

// "Bob" - "bill"
// // Prediction:NaN
// // Actual:NaN

