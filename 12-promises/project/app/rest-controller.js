"use strict";

var app = require('./app');

var restController = function($scope,$http, $timeout,userApiService, promiseService){

	$scope.data;
	$scope.process = 'processing....';
	
	$http({
		method: 'GET',
		url: '/api/users'
	}).then(function(response){
		$timeout(function(){
			$scope.data = response.data;	
			$scope.process = 'processed';
		}, 2000);
		
	});

	$scope.dataFromService = userApiService.getUsers();
	$scope.singleUser = userApiService.getUserById(1234);
	$scope.process = 'almost there';

	$scope.asynCallExecutedSucess = false;
	promiseService.asyncCall(true).then(
		function(data){
			$scope.asynCallExecutedSucess = data;
		},function(error){
			$scope.asynCallExecutedSucess = error;
		});

	promiseService.asyncCall(false).then(
		function(data){
			$scope.asynCallExecutedError = data;
		},function(error){
			$scope.asynCallExecutedError = error;
		});


};


app.controller("restController", ['$scope','$http','$timeout', 'userApiService' , 'promiseService', restController]);
module.exports = app;