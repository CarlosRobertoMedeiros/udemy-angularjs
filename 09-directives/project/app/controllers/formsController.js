"use strict"

var app = require('../app');

var formsController = function($scope){
	$scope.form = {
		carType: '',
		hasTurbo: true
	};

	$scope.formDisabled = {
		name: '',
		disableName: false
	};

	$scope.formSubmit = {
		name : '',
		hasId: true,
		error: undefined
	};

	$scope.validateForm = function(){
		$scope.formSubmit.error = undefined;

		if (!$scope.formSubmit.hasId){
			$scope.formSubmit.error = 'Do not have ID';
			return ;
		}
		// Do something here like call REST service or change screen.
	};

	//This is the same thing bellow
	/*
	$scope.checkbox = {};
	$scope.checkbox.cb1 = true;
	$scope.checkbox.cb2 = 'Y';
	$scope.checkbox.cb3 = 'Going';
	*/

	$scope.checkbox = {
		cb1 : true,
		cb2 : 'Y',
		cb3 : 'Going'
	};

	$scope.dropdownArray = [
		{value: 1, name:"This is one (array)"},
		{value: 2, name:"This is two (array)"},
		{value: 3, name:"This is three (array)"}
	];

	$scope.default = {
		manual: '2',
		//fromArray:{"value":1,"name":"This is one (array)"}	// Assim o angularJs não entende
		fromArray: $scope.dropdownArray[1],
		singleValueFromArray: 2
	};

	//requiredTest








};

app.controller("formsController", ['$scope',formsController]);