'use strict';

/* Controllers */

angular.module('webinarRegApp.controllers', []).
  controller('WebinarsController', [function($scope) {
  	$scope.webinar = { "title": "Selling to the Seller",
  	"date": "March 1st",
  	"presenter": "John Johnson, CEO, Johnson Co."}
  }])
  .controller('AttendeesController', [function($scope) {
  	$scope.attnedee = {	"name" : "Johnny Tester",
  		"company" : "Test Co"  },
  	{	"name": "Cindy Practice",
  		"company" : "Practice Co"}

  }]);