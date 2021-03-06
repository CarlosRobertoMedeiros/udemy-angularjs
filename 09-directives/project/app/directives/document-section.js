"use strict";

var app = require('../app');

//document-section
app.directive("documentSection", function(){

	return {
		restrict: 'E',
		transclude: true,
		scope:{
			title: '@'
		},
		templateUrl: './app/directives/templates/document-section.html'
	};

});


module.exports = app;