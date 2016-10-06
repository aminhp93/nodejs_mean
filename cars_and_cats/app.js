var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log(server);
	console.log(req.url);
	var splitURL = req.url.split("/");
	console.log(splitURL);
	var firstChunk = splitURL[1];
	console.log(firstChunk);

	switch (firstChunk){
		case "styles":
			serveCSS(splitURL[2], res);
			break;
		case 'images':
			serverPNG(splitURL[2], res);
			break;
		default:
			switch(splitURL[1]){
				case "cars":
					if (splitURL[2] === "new"){
						serveHTML('new_car.html', res);
					} else {
						serveHTML('cars.html', res);
					}
					break;
				case "cats":
					serveHTML("cats.html", res);
					break;
				default:
					serve404(res);
			}

	}
})

function serveHTML(filename, response){
	fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
		if (error){
			return serve404(response);
		}
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(contents);
		response.end();
	})
}

function serveCSS(filename, response){
	fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents){
		if (error){
			return serve404(response);
		}
		response.writeHead(200, {'Content-Type': 'text/css'});
		response.write(contents);
		response.end();
	})
}

function serverPNG(filename, response){
	fs.readFile(`images/${filename}`, function(error, contents){
		if (error){
			return serve404(response);
		}
		response.writeHead(200, {'Content-Type': 'text/png'});
		response.write(contents);
		response.end();
	})
}

function serve404(response){
		response.writeHead(404);
		response.end("File not found");
}
server.listen(3000);
console.log("RUnning on 3000");

// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res){
// 	console.log('client request URL:', req.url);

// 	if (req.url === "/cars"){
// 		fs.readFile('views/cars.html', 'utf8', function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'text/html'});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile(`images/car1.png`, function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'image/png'});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile(`images/car2.png`, function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'image/png'});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile(`images/car3.png`, function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'image/png'});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile('stylesheets/style.css', 'utf8', function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'text/css'});
// 			res.write(contents);
// 			res.end();
// 		})
// 	} else if (req.url === "/cats") {
// 		fs.readFile('views/cats.html', 'utf8', function(err, contents){
// 			res.writeHead(200, {"Content-Type": "text/html"});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile(`images/cat1.png`, function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'image/png'});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile(`images/cat2.png`, function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'image/png'});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile(`images/cat3.png`, function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'image/png'});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile('stylesheets/style.css', 'utf8', function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'text/css'});
// 			res.write(contents);
// 			res.end();
// 		})
// 	} else if (req.url === '/car/new'){
// 		fs.readFile('views/new_car.html', 'utf8', function(err, contents){
// 			res.writeHead(200, {'Content-Type': 'text/html'});
// 			res.write(contents);
// 			res.end();
// 		})
// 		fs.readFile('stylesheets/style.css', 'utf8', function(err, contents){
// 			res.writeHead(200, {"Content-Type": 'text/css'});
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
