var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.listen(8000, function() {
	console.log("Welcome!");
});

console.log("Listening on Port 8000");