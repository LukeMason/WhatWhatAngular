'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'wpEditInPlace.directives',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
      templateUrl: 'partials/home.html', 
      controller: 'HomeCtrl'
  });
  $routeProvider.when('/basics', {
      templateUrl: 'partials/basics.html', 
      controller: 'default'
  });
$routeProvider.when('/jQuery', {
      templateUrl: 'partials/soYouWantToUseJquery.html', 
      controller: 'default'
  });
  $routeProvider.when('/more', {
      templateUrl: 'partials/moreCoolStuff.html', 
      controller: 'default'
  });
  $routeProvider.when('/bestPractices', {
      templateUrl: 'partials/bestPractices.html', 
      controller: 'default'
  });
$routeProvider.when('/resources', {
      templateUrl: 'partials/resources.html', 
      controller: 'RescCtrl'
  });
  $routeProvider.otherwise({
      redirectTo: '/home'
  });
}]);
