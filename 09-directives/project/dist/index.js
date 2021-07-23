(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var app =  angular.module("myApp", []);

module.exports = app;
},{}],2:[function(require,module,exports){
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
},{"../app":1}],3:[function(require,module,exports){
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

},{"../app":1}],4:[function(require,module,exports){
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
		templateUrl: './app/directives/document-section.html'
	};

});


module.exports = app;
},{"../app":1}],5:[function(require,module,exports){
"use strict";

var app = require('./app');


//directives
require('./directives/document-section');
require('./directives/directive-types');


//controllers
require('./controllers/formsController');






},{"./app":1,"./controllers/formsController":2,"./directives/directive-types":3,"./directives/document-section":4}]},{},[5]);
