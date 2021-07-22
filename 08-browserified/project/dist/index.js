(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var app = angular.module("diApp",[]);

module.exports = app;

},{}],2:[function(require,module,exports){
"use strict";

var app = require('./app');
require('./services');

// My preferred way to create a controller
var mainCtrl = function($scope, carFactory, supraService) {
  $scope.controllerName = 'Main';
  $scope.car;
  $scope.message = supraService.getMessage2() + " - " + supraService.hasTurbo;

  $scope.selectCar = function() {
    if ($scope.car !== undefined) {
      $scope.message = carFactory.getMessage($scope.car);
    }
  };
};
app.controller("mainCtrl", ['$scope', 'carFactory', 'supraService', mainCtrl]);

// Second way to create a controller
app.controller("secondaryCtrl", ['$scope', 'carFactory', 'carService', function($scope, carFactory, carService) {
  $scope.controllerName = 'Secondary';
  $scope.car;
  $scope.message = carService.getMessage2() + " - " + carService.hasTurbo;

  $scope.selectCar = function() {
    if ($scope.car !== undefined) {
      $scope.message = carFactory.getMessage($scope.car);
    }
  };
}]);

},{"./app":1,"./services":5}],3:[function(require,module,exports){
"use strict";

var app = require('./app');

var carFactory = function() {

  var carService = {};

  carService.getMessage = function(car) {
    var message = 'No car selected';
    switch(car) {
      case "G37":
        message = "This car is a Infinity";
        break;
      case "Jetta":
        message = "This car is VW";
        break;
      case "Supra":
        message = "This is the best car ever"
        break;
      default:
        message = 'Car Not found on factory';
        break;
    };
    return message;
  };

  return carService;
};

app.factory("carFactory", carFactory);

},{"./app":1}],4:[function(require,module,exports){
"use strict";

// require js files here
require('./app');
require('./controllers');
require('./factories');

},{"./app":1,"./controllers":2,"./factories":3}],5:[function(require,module,exports){
"use strict";

var app = require('./app');

// Car Service
var carService = function() {

  this.getMessage = function() {
    return "Message from the service";
  }

};

carService.prototype.getMessage2 = function() {
  return "Message 2 here";
};
app.service("carService", carService);

// Supra Service
var supraService = function() {
  this.hasTurbo = "Of course it has turbo";
};

supraService.prototype = Object.create(carService.prototype);

app.service("supraService", ['carService', supraService]);

},{"./app":1}]},{},[4]);
