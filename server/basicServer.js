const http = require("http");
// const url = require("url");
const fs = require("fs");
const path = require("path");

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.
// http.createServer((req, res) => {
// 	res.write("Welcome to NodeJS");
// }).listen(5555, () => {
// 	console.log("listening on Port 5555");
// });

// 2. Write script to create a server, send in response the request headers
// and add listener on port 6666.
http.createServer((req, res) => {
	res.end(JSON.stringify(req.headers));
}).listen(6666, () => {
	console.log("listening on Port 5555");
});

// 3. create a server and console request methods and url by doing request
// from postman or web browsers.
http.createServer((req, res) => {
	let reqUrl = req.url;
	console.log(reqUrl);
}).listen(3001, () => {
	console.log("Listening to Port 3001");
});
// 4. create a server
// - set response headers as 'text/html' using res.setHeader property.
// - write some HTML content in response
// - listen on port 6000
http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.write(`<h1>Welcome to NodeJS</h1>`);
}).listen(6001, () => {
	console.log("Listening to Port 6001");
});

// 5. create a server
// - create a seperate file index.html and write some html content
// - read the html file content and send it in response in createServer method
// - don't forget to set header before writing to response
http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	fs.createReadStream("./index.html").pipe(res);
}).listen(6002, () => {
	console.log("Listening to Port 6002");
});
// 6. create a server
// - create 3 diffenrent file ie. indx.html, about.html, contact.html
// - inside createServer, handle different urls for serving different html file
// - '/' route for index.html file
// - "/about" for about.html file
// - "/contact" for contact.html file

// 7. create an Server(echoServer)
// handle post request for incoming data from postman using req as eventEmitter
// send incoming data back in response

// 8. create a server
// handle json data from postman
// parse the json data
// send json data back in response

// 9. create a server
// handle x-www-urlencoded(form data) coming form postman
// parse form-data using querystring module
// send data back in response

// 10. create a server and add listener on port 7000
// send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
// parse the request url using 'url' core node module
// extract protocol, path and pathname, query from the request
// send path in response

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
// use path module from core node
