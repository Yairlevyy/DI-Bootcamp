const {largeNumber, dateAndTime} = require('./main.js');

// const b = 5;

// console.log(`${largeNumber+b}`)

const http = require('http');

// const server = http.createServer((req,res)=>{
//   console.log("I'm listening");
//   res.setHeader('Content-Type', 'text/html');
//   res.writeHead(200);
//   res.end(`<html><p>My module is:</p><br><p>${largeNumber+b}</p><br><h1>Hi there at the frontend</h1></html>`)
// })
// server.listen(3000);

const server = http.createServer((req,res)=>{
  console.log("I'm listening");
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(`<html><p>${dateAndTime}</html>`)
})
server.listen(8080);
