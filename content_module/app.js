// var http = require('http');
// var fs = require('fs');

// server = http.createServer(function(request, response){
// 	response.writeHead(200, {'Content-Type': 'text/html'});
// 	console.log("Request", request.url);

// 	if (request.url === "/"){
// 		fs.readFile('views/index.html', 'utf8', function(err, contents){
// 			response.write(contents);
// 			response.end();
// 		})
// 	} else if (request.url === "/dojo.html"){
// 		fs.readFile('views/dojo.html', 'utf8', function(err, contents){
// 			response.write(contents);
// 			response.end();
// 		})
// 	} else if (request.url === '/stylesheet/style.css'){
// 		fs.readFile('stylesheet/style.css', 'utf8', function(err, contents){
// 			response.write(contents);
// 			response.end();
// 		})
// 	} else {
// 		response.end("File not found");
// 	}
// })

// server.listen(3000);
// console.log('RUnnign in localhsot 3000');

var http = require('http');

var static_contents = require('./static.js');

server = http.createServer(function(request, response){
	static_contents(request, response);
})
server.listen(3000);
console.log("Runnign in port 3000");









