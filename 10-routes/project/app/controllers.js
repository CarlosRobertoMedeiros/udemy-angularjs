"use strict";

var app = require('./app');

var dashboardCtrl = function($scope, $state){
	$scope.currentMenu = "api";

	$scope.callHome = function(){
		$state.go('home');
	};

	$scope.changeMenu = function(menu){
		$scope.currentMenu = menu;
	};

};

var dashboardApisCtrl = function($scope){
	$scope.title = "We are in the API dashboardApisCtrl";
};

var dashboardTimesCtrl = function($scope){
	$scope.title = "We are in the Times dashboardTimesCtrl";
};

app.controller("dashboardCtrl",['$scope','$state',dashboardCtrl]);
app.controller("dashboardApisCtrl",['$scope',dashboardApisCtrl]);
app.controller("dashboardTimesCtrl",['$scope',dashboardTimesCtrl]);


module.exports = app;