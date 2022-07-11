const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

let usernames = [];

gameInfo.forEach((username, i) => {
  let user = username["username"];
  user+= "!";
  usernames.push(user);
})

console.log(usernames)

let winners = [];

gameInfo.forEach((username, i) => {
  let user = username["username"];
  user+= "!";
  let score = username["score"];
  score > 5 ? winners.push(user)
 
})

console.log(winners)

let totalScore = 0;

gameInfo.forEach((username) => {totalScore += username["score"]})

console.log(totalScore);
