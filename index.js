var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.listen(8000);

console.log("Listening on Port 8000");