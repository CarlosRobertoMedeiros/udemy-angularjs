var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = 8080;

server.use(express.static(__dirname + '/app'));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vdn.api+json'}));

server.listen(port);
console.log("App listening on port " + port);


// /api/users
server.get('/api/users',function(req,res){

	var users = [
		{"name" : "Roberto", "age": 39},
		{"name" : "Luciene", "age": 37},
		{"name" : "Ezequias", "age": 36},
	];

	res.json(users);
});

//application
server.get('*', function(req,res){
	res.sendFile('./app/index.html');
});



