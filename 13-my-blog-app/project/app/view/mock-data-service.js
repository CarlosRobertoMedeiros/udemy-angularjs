"use strict";

var app = require('../app');


var mockDataService = function(){
	this.getPost = function(title, subtitle){
		return {
			"id": Math.random(),
			"title":title,
			"subtitle":subtitle,
			"content":"This guy is posting into "+ title + " thinking that the subtitle " + subtitle + " is correct",
			"messages": [
				{"author": "Carlos Roberto", "message": "Thanks for the awesome post" + title},
				{"author": "Luciene Alves", "message": "That was great. It made my day"}
			]
		};

	};
};

app.service("mockDataService", mockDataService);


module.exports = app;