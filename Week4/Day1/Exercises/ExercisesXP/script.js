ð Exercise 1 : Scope
Instructions
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file.
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}


// run in the console: 
// q1() : 3

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}


// run in the console:
// q22() : 0
// q2()
// q22() : 5

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// run in the console:
q3() : 
// q32() : undefined

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// run in the console:
q4() : "test"

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
// alert(a): 5




ð Exercise 2 : Ternary Operator
Instructions
Using the code below:

function winBattle(){
    return true;
}
Transform the winBattle() function to an arrow function.
Create a variable called experiencePoints.
Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
Console.log the experiencePoints variable.

const winBattle = () => return true;

let experiencePoints = winBattle() === true ? 10 : 1;





ð Exercise 3 : Is It A String ?
Instructions
Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
Check out the example below to see the expected output
Example:

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false

const checkType = (arg) => {
    let checker = isString(arg) ? return true : false;
}




ð Exercise 4 : Colors
Instructions
Using this array :

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
Write a JavaScript program that displays the colors in the following order : â1# choice is Blue.â â2# choice is Green.â â3# choice is Red.â ectâ¦
Check if at least one element of the array is equal to the value âVioletâ. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods.

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

const displaySentence = () => {
    for (i = 0; i < colors.length; i++) {
    let sentence = `${i+1}# choice is ${colors[i]}`
    console.log(sentence);
}

displaySentence();

colors.forEach((color, i) => {
    let sentence = `${i+1}# choice is ${color}`
    console.log(sentence);
});


const checkViolet = () => {
 let violet = colors.some((color) => {return (color = "Violet")}) === true ? console.log("Yeah") : console.log("No...");
} 

checkViolet();




