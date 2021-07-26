"use strict";

var app = require('./app');

//Using Custom filter
app.filter('internalId', function(){
	return function(input){
		var output = "BGP000" + input + (input * 3 / 2);
		return output;
	}
});

module.exports = app;