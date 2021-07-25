"use strict";


var app = require('../app');


app.directive('linkTest',function(){

	return {
		restrict: 'E',
		templateUrl: './app/directives/templates/link-test.html',
		controller: ['$scope', function($scope){
			$scope.calls = [];
			$scope.calls.push("Call from the controller");
		}],
		link: function(scope,element,attrs){
			scope.calls.push("Call from the link");
			var userData = element.find('user-data');
			userData.replaceWith('<div> User-count has value of: '+ attrs.userCount+ '</div>');
			scope.userCount = attrs.userCount;
		}
	};
});

module.exports = app;
