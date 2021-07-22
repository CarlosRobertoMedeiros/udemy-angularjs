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
