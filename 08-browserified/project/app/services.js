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
