"use strict";

var app = require('../app');

app.directive("blogPost",function(){
	return {
		restrict: 'E',
		templateUrl: './app/view/templates/blog-post.html',
		scope:{
			post:'='
		},
		controller: ['$scope', function($scope){
			$scope.messageContent = "";
			$scope.addMessage = function(){

			};
		}]
	}

});

module.exports = app;