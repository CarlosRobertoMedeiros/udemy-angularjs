var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = 8080;

server.use(express.static(__dirname + '/project'));
server.use(bodyParser.json());
server.use(bodyParser.json({ type: 'application/vdn.api+json' }));

server.listen(port);
console.log("App listening on port " + port);


//User api
server.get('/api/users',function(req,res){
  
  if(req.query.id !== undefined){

    console.log("Query user by id:"+req.query.id);
    res.json({"id":req.query.id, "name":"Carlos Roberto","age":39});

  }else{

    //call DB
    var users = [];
    users.push({"name":"Carlos Roberto","age":39});
    users.push({"name":"Luciene Alves","age":37});
    users.push({"name":"Ezequias Alves","age":36});

    var response = {
      "totalCount": users.length,
      "users":users
    };

    res.json(response);
  }

});


//application
server.get('*', function(req, res) {
  res.sendfile('./project/index.html');
});
