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
	.controller('WebinarsController', function($scope, webinarFactory){
		// $scope.webinar = webinarFactory.getWebinar();
		console.log("WebinarsController");
		$scope.webinar = getWebinar();
		// $scope.webinar = {	title: "Selling to the Seller", 
		// 			date: "March 1st",
		// 			presenter: "John Johnson, CEO, Johnson Co."
		// 		};
		$scope.what = "Huh?!";
	})
	.controller('AttendeesController', function($scope, attendeesFactory){
		$scope.attendees = attendeesFactory.getAttendees();
		console.log("FUCK THIS IS HARD");
	})
	.controller('PageController', function($scope){
		$scope.page = [
			{"title": "THE PAGE TITLE"}
		];
	});
