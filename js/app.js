'use strict';


// Declare app level module which depends on filters, and services
angular.module('webinarRegApp', ['webinarRegApp.filters', 'webinarRegApp.services', 'webinarRegApp.directives', 'webinarRegApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'WebinarController'});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'AttnedeeController'});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
