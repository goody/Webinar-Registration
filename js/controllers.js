'use strict';

/* Controllers */

var appControllers = {};

appControllers.WebinarsController = function($scope){
	$scope.webinar =[
		{"title": "Selling to the Seller", "date": "March 1st","presenter": "John Johnson, CEO, Johnson Co."}
  	];
};

appControllers.AttendeesController = function($scope){
	$scope.attendee = [
  		{"name" : "Johnny Tester","company" : "Test Co"  },
  		{"name": "Cindy Practice","company" : "Practice Co"}
  	];
};

angular.module('webinarRegApp.controllers', []).controller(appControllers);