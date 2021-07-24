"use strict";

var app = require('../app');


app.directive('controllerScope',function(){
	return {
		restrict :'AE',
		templateUrl: './app/directives/templates/scope-test.html'
	}
}).directive('isolatedScope',function(){
	return {
		restrict :'AE',
		scope: {

		},
		templateUrl: './app/directives/templates/scope-test.html'
	}
}).directive('attributeScope',function(){
	return {
		restrict :'AE',
		scope: {
			form: '=',
			form2: '=title'
		},
		templateUrl: './app/directives/templates/scope-test.html'
	}
}).directive('atAttributeScope',function(){
	return {
		restrict :'AE',
		scope: {
			form: '@',
			form2: '@title'
		},
		templateUrl: './app/directives/templates/scope-test.html'
	}
}).directive('sendFunction',function(){
	return {
		restrict :'AE',
		scope: {
			form: '&',
			form2: '&title'
		},
		templateUrl: './app/directives/templates/scope-function-test.html'
	}
});


module.exports = app;