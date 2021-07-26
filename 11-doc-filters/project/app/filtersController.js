"use strict"

var app = require('./app');

var filtersController = function($scope, $filter){
	$scope.name = "CarLos RoberTo";
	$scope.filteredNameUpper = $filter('uppercase')("CarLos RoberTo");
	$scope.filteredNameLower = $filter('lowercase')("CarLos RoberTo");

	$scope.unfilteredName = "Carlos RobertO";
	$scope.ammount = "1234.67";

	$scope.data = [];
	$scope.data.push({id: 1,  name: 'Carlos Roberto', state:'DF'});
	$scope.data.push({id: 23, name: 'Ezequias Alves', state:'SP'});
	$scope.data.push({id: 12, name: 'Luciene Alves',  state:'RJ'});
};

app.controller("filtersController",['$scope','$filter',filtersController]);
module.exports = app;
