'use strict';


// Declare app level module which depends on filters, and services
angular.module('webinarRegApp', ['webinarRegApp.filters', 'webinarRegApp.services', 'webinarRegApp.directives', 'webinarRegApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/webinar', {templateUrl: 'partials/partial1.html', controller: 'WebinarsController'});
    $routeProvider.when('/attendees', {templateUrl: 'partials/partial2.html', controller: 'AttendeesController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
