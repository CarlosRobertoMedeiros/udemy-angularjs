"use strict";

var app = require('../app');

var blogPostController = function($scope){
	$scope.posts = [];

	$scope.posts.push({
		"id": 1,
		"title":"This is my Title",
		"subtitle":"This is my subTitle to test",
		"content":"This is my content.This is my content.This is my content.This is my content",
		"messages": [
			{"author": "Carlos Roberto", "message": "Thanks for the awesome post."},
			{"author": "Luciene Alves", "message": "That was great. It made my day"}
		]
	});

	$scope.posts.push({
		"id": 2,
		"title":"This is my Title",
		"subtitle":"This is my subTitle to test",
		"content":"This is my content.This is my content.This is my content.This is my content",
		"messages": [
			{"author": "Carlos Roberto", "message": "Thanks for the awesome post."},
			{"author": "Luciene Alves", "message": "That was great. It made my day"}
		]
	});

	$scope.posts.push({
		"id": 3,
		"title":"This is my Title",
		"subtitle":"This is my subTitle to test",
		"content":"This is my content.This is my content.This is my content.This is my content",
		"messages": [
			{"author": "Carlos Roberto", "message": "Thanks for the awesome post."},
			{"author": "Luciene Alves", "message": "That was great. It made my day"}
		]
	});


};


app.controller("blogPostController", ['$scope', blogPostController]);

module.exports = app;