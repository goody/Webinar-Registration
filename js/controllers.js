'use strict';

/* Controllers */

// var appControllers = {};

// appControllers.WebinarsController = function($scope, webinarFactory){
//   	$scope.webinar = [
// 		{"title": "Selling to the Seller", "date": "March 1st","presenter": "John Johnson, CEO, Johnson Co."}
//   	];
// };

// appControllers.AttendeesController = function($scope, attendeesFactory){
// 	$scope.attendees = attendeesFactory.getAttendees();
// };


// webinarRegApp.controller('WebinarsController', function($scope, webinarFactory){
// 	$scope.webinar = getWebinar();
// });

angular.module('webinarRegApp.controllers', [])
	.controller('WebinarsController', function($scope, WebinarFactory){
		// $scope.webinar = webinarFactory.getWebinar();
		//console.log("WebinarsController");
		$scope.webinar = WebinarFactory;
		// $scope.webinar = {	title: "Selling to the Seller", 
		// 			date: "March 1st",
		// 			presenter: "John Johnson, CEO, Johnson Co."
		// 		};
		$scope.what = {what:"Huh?!"};
	})
	.controller('AttendeesController', function($scope, AttendeesFactory){
		$scope.attendees = AttendeesFactory;
		console.log("FUCK THIS IS HARD");
	})
	.controller('PageController', function($scope){
		$scope.page = {title: "THE PAGE TITLE"};
	});
