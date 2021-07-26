"use strict";

var app = require('./app');

var restController = function($scope,$http){

	$scope.data;
	$http({
		method: 'GET',
		url: '/api/users'
	}).then(function(response){
		$scope.data = response.data;
	});
};


app.controller("restController", ['$scope','$http',restController]);
module.exports = app;