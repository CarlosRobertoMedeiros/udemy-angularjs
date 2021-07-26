(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var app =  angular.module("myApp", []);

module.exports = app;
},{}],2:[function(require,module,exports){
"use strict";

var app = require('./app');

//document-section
app.directive("documentSection", function(){

	return {
		restrict: 'E',
		transclude: true,
		scope:{
			title: '@'
		},
		templateUrl: './app/templates/document-section.html'
	};

});


module.exports = app;
},{"./app":1}],3:[function(require,module,exports){
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

},{"./app":1}],4:[function(require,module,exports){
"use strict";

var app = require('./app');


//directives
require('./document-section');


//controllers
require('./filtersController');

//custom filters
require('./internal-id-filter');






},{"./app":1,"./document-section":2,"./filtersController":3,"./internal-id-filter":5}],5:[function(require,module,exports){
"use strict";

var app = require('./app');

//Using Custom filter
app.filter('internalId', function(){
	return function(input){
		var output = "BGP000" + input + (input * 3 / 2);
		return output;
	}
});

module.exports = app;
},{"./app":1}]},{},[4]);
