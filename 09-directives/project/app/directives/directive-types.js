"use strict";

var app = require('../app');

// <element-test></element-test>
app.directive('elementTest',function(){
	return {
		restrict: 'E',
		template: '<div>this message came from an <b>Element Directive</b></div>'
	};
}).directive('attributeTest',function(){
	return {
		restrict: 'A',
		template: '<div>this message came from an <b>Attribute Directive</b></div>'
	};
}).directive('classTest',function(){
	return {
		restrict: 'C',
		template: '<div>this message came from a <b>Class Directive</b></div>'
	};
}).directive('commentTest',function(){
	return {
		restrict: 'M',
		replace: true,
		template: '<div>this message came from a <b>Comment Directive</b></div>'
	};
});

module.exports = app;
