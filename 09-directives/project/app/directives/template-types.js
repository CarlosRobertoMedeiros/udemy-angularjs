"use strict";


var app = require('../app');


app.directive('templateTest',function(){
	return {
		restrict: 'EA',
		template: '<div> This message comes from the <b>template</b></div>'
	};


}).directive('templateUrlTest',function(){
	return {
		restrict: 'EA',
		templateUrl: './app/directives/templates/template-url-test.html'
	};

});


module.exports = app;