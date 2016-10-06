var fs = require('fs');
var path = require('path');

module.exports = function(request, response){
	// response.writeHead(200, {'Content-Type': 'text/html'});
	// console.log("Request", request.url);

	// if (request.url === "/"){
	// 	fs.readFile('views/index.html', 'utf8', function(err, contents){
	// 		response.write(contents);
	// 		response.end();
	// 	})
	// } else if (request.url === "/dojo.html"){
	// 	fs.readFile('views/dojo.html', 'utf8', function(err, contents){
	// 		response.write(contents);
	// 		response.end();
	// 	})
	// } else if (request.url === '/stylesheet/style.css'){
	// 	fs.readFile('stylesheet/style.css', 'utf8', function(err, contents){
	// 		response.write(contents);
	// 		response.end();
	// 	})d
	// } else {
	// 	response.end("File not found");
	// }

	path.exists('.' + request.url, function(exists){
		if (exists){
			if (request.url === "/"){
				fs.readFile('./views/index.html', 'utf8', function(err, contents){
					response.write(contents);
					response.end();
				})
			} else {
				fs.readFile('.' + path.dirname(request.url) + "/" + path.basename(request.url), function(err, contents){
					response.write(contents);
					response.end();
				})
			}
		} else {
			response.end('File not found');
		}
	})
}
