"use strict";

var app = require('../app');

app.directive('controllerTest',function(){
	return {
		restrict: 'E',
		scope: {
			count: '@'
		},
		templateUrl: './app/directives/templates/controller-test.html',
		controller: ['$scope' , function($scope){
			$scope.listOfNames = [];
			for(let i=1; i <= $scope.count;i++){
				$scope.listOfNames.push('Name created #' + i);
			}
		}]
	};
});

module.exports = app;