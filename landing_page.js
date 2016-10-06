var fs = require('fs');
	http = require('http');
	port = 3000;

var server = http.createServer(function(req, res){
	var file;

	switch (req.url){
		case "/":
			file = "index.html"
			break;
		case "/ninjas":
			file = 'ninjas.html'
			break;
		case "/dojos/new":
			file = "dojos.html"
			break;
		default:
			file = null;
			break;
	}

	if (file !== null){
		fs.readFile(`${file}`, 'utf8', function(err, contents){
			if (err){
				console.log(err);
			}
			res.writeHead(200, {"Content-Type": 'text/html'});
			res.write(contents);
			res.end();
		})
	} else {
		res.writeHead(404);
		res.end('File not found');
	}
})
server.listen(port, function(){
	console.log("Running on port: ", port);
})

// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res){
// 	console.log('client request URL:', req.url);

// 	if (req.url === "/"){
// 		fs.readFile('index.html', 'utf8', function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'text/html'});
// 			res.write(contents);
// 			res.end();
// 		})
// 	} else if (req.url === "/ninjas") {
// 		fs.readFile('ninjas.html', 'utf8', function(err, contents){
// 			res.writeHead(200, {"Content-Type": "text/html"});
// 			res.write(contents);
// 			res.end();
// 		})
// 	} else if (req.url === '/dojos/new'){
// 		fs.readFile('dojo.html', 'utf8', function(err, contents){
// 			res.writeHead(200, {'Content-Type': 'text/html'});
// 			res.write(contents);
// 			res.end();
// 		})
// 	} else {
// 		res.writeHead(404);
// 		res.end('Page not found');
// 	}
// })

// server.listen(3000);
// console.log("Running server at port 3000");



