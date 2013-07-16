'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('webinarRegApp.services', [])
  .value('version', '0.2')
  .factory('WebinarFactory', function(){
  	var factory = {};
  	var webinar = { 
  		title: "Selling to the Seller", 
      date: "March 1st",
      presenter: "John Johnson, CEO, Johnson Co." 
  	};
  	//factory.getWebinar = function(){
  		return webinar;
  	// };
  	// factory.return;

  })
  .factory('AttendeesFactory', function(){
  	var factory = {};
  	var attendees = [
  		{"name" : "Johnny Tester","company" : "Test Co"  },
  		{"name": "Cindy Practice","company" : "Practice Co"}
  	];
  	//factory.getAttendees = function(){
  		return attendees;
  	// };
  	// factory.return;
  });

