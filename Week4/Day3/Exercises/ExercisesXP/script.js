Exercise 1 : Analyzing
Instructions
Analyze these pieces of code before executing them. What will be the outputs ?
------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// outputs : result = ['bread', "carrot", "potato",'chicken',"apple", "orange"]

------2------
const country = "USA";
console.log([...country]);

// outputs : ['U', 'S', 'A']

------Bonus------
let newArray = [...[,,]];
console.log(newArray);




🌟 Exercise 2 : Employees
Instructions
// Using this array:

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.


// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const welcomeStudents = users.map((elem) => `Hello ${elem["firstName"]}`)

console.log(welcomeStudents);

const fullStack = users.filter((elem) => elem["role"].includes('Full Stack Resident'));
						
console.log(fullStack)

const fullLast = users.filter((elem) => elem["role"].includes('Full Stack Resident'));
						.map((elem) => elem["lastName"]);
console.log(fullLast)




🌟 Exercise 3 : Star Wars
Instructions
Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

Use the reduce() method to combine all of these into a single string.

const sentence = epic.reduce((acc, word) => `${acc} ${word}`);
console.log(sentence);




🌟 Exercise 4 : Employees #2
Instructions
Using this object:

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technol.

const studentsPassed = students.filter((elem) => elem["isPassed"] === true);
console.log(studentsPassed)
