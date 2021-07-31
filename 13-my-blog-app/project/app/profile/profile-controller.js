"use strict";

var app = require('../app');

var profileController = function($scope, dataService, toastr){
	$scope.basicInfo = dataService.getBasicInfoData();
	$scope.social = dataService.getSocialData();

	$scope.basicInfoEdit = angular.copy($scope.basicInfo);//Quebrando o fluxo de notificação
	$scope.socialEdit = angular.copy($scope.social);//Quebrando o fluxo de notificação
	
	$scope.saveBasicForm = function(){
		dataService.saveBasicInfo(angular.copy($scope.basicInfoEdit));
		$scope.basicInfo = angular.copy($scope.basicInfoEdit);
		toastr["success"]("Basic info saved successfully! ");

	};

	$scope.saveSocialForm = function(){
		dataService.saveSocial(angular.copy($scope.socialEdit));
		$scope.social = dataService.getSocialData();// também pode fazer como em cima angular.copy($scope.socialEdit);
		toastr["success"]("Your social data is safe and sound now.", "It´s saved successfully! ");
	};

};

app.controller("profileController", ['$scope' , 'dataService', 'toastr', profileController]);

module.exports = app;