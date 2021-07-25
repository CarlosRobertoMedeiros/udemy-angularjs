"use strict";


var app = require('../app');

var createDirective = function(level){
	return function(){
		return {	
			restrict: 'E',
			controller: ['$scope',function($scope){
				console.log("Test "+level+ " : controller");
			}],
			compile: function(){
				console.log("Teste "+ level +": compile");
				return {
					pre: function(scope, element, attrs){
						console.log("Teste "+ level +": pré-link");
					},
					post: function(scope, element, attrs){
						console.log("Teste "+ level +": post-link");
					}
				}
			}
  		};
	};
};


app.directive('compileTestOne',createDirective("L-One"));
app.directive('compileTestTwo',createDirective("L-Two"));

module.exports = app;