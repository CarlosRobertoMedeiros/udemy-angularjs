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
