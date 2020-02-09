var fs = require("fs");
var path = require("path");

// Use fs module for all operations below.

// 1. Write script to read file theory.md and console the output buffer.
fs.readFile("./theory.md", (err, data) => {
	if (err) {
		console.log(err);
	}
	console.log(data);
});

// 2. Write script to read file theory.md and convert resulted buffer using toString
// method and console the result.
// fs.readFile("./theory.md", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });

// 3. Write script to read file Synchronously and console the output.
var data = fs.readFileSync("./theory.md");
console.log(data);

// 4. Write script to create a file 'write.js' and write content of read.js in there.

var wfile = fs.writeFile(
	path.join(__dirname, "/write.js"),
	fs.readFileSync("read.js"),
	err => {
		if (err) console.log(err);
		console.log("File written to...");
	}
);
// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
fs.open("", "wx", (err, fd) => {
	if (err) return console.log(err);
	fs.writeFile(fd, store, err => {
		if (err) return console.log(err);
		fs.close(fd, err => {
			if (err) return console.log(err);
			res.end(`${username} created successfully`);
		});
	});
});
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

// 6. Delete the content of write.js using fs.unlink or unlinkSync method
fs.truncate(path.join(__dirname, "write.js"), 0, () => {
	console.log("Deleted");
});
