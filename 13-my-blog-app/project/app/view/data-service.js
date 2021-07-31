"use strict";

var app = require('../app');

var dataService = function(mockDataService){
	this.data = [];
	
	this.data.push(mockDataService.getPost("Learn Angular from scratch",
										   "Create cool projects learning AngularJs"));

	this.data.push(mockDataService.getPost("Java Algorithms and DS",
										   "Become a Java PRO"));

	this.data.push(mockDataService.getPost("Learn Angular from scratch",
										   "Create cool projects learning AngularJs"));

	this.data.push(mockDataService.getPost("Java Algorithms and DS",
										   "Become a Java PRO"));

	this.newPost = {
	    id: Math.random(),
	    title: undefined,
	    subtitle: undefined,
	    content: undefined,
	    messages: []
  	};

	this.basicInfo = {
		name:"Carlos Roberto",
		introduction: "I love generate value for my client."
	};

	this.social = {
		works: 'my company',
		lives: 'Brasilia, Brazil',
		birthday: new Date('1981-12-12T05:00:00.000Z'),
		from: 'Brazil'
	};

};

var proto = dataService.prototype;

proto.getNewPostData = function() {
  return this.newPost;
};

proto.getPostData = function(){
	return this.data;
};

proto.createPost = function(data){
	this.data.unshift( angular.copy(data) );	
};

proto.getBasicInfoData = function(){
	return this.basicInfo;
};

proto.saveBasicInfo = function(data){
	return this.data;
};

proto.getSocialData = function(){
	return this.social;

};

proto.saveSocial = function(data){
	this.social = data;
};

app.service('dataService', ['mockDataService',dataService]);



