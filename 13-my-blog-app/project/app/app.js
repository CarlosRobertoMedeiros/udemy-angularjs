"use strict";

var app = angular.module('blog', ['ui.router','toastr']);

app.config(function($stateProvider, $urlRouterProvider){

	var createState = function(alias,params){
		$stateProvider.state(alias,params);
	};

	createState("view",{url:"/",templateUrl: './app/view/templates/view.html'});

	$urlRouterProvider.otherwise('/');
});

module.exports = app;

