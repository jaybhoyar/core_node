//1. this is how most of javascript codes are executed which are present
// in a file or in entire project.
console.log("hello World");

//4. Read file(theory.md) here using fs module and console the results of operation.
const fs = require("fs");
fs.readFile("theory.md", (err, file) => {
	console.log(err, file);
});
//6. Blocking code
// Run it first and observe the output
// var file = fs.readfileSync("./theory.md", (err, file) => {
// 	console.log(file);
// });
// console.log("run me first");

// // change it to run it in non-blocking manner.
// var file = fs.readFileSync("./theory.md");
// console.log(file);
// console.log("run me first");

// Observe the difference in blocking and non-blocking code.

// 10. require math.js
// console const pie and add and multiply function.
var math = require("./math.js");
console.log(math.pie);
