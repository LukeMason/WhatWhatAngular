'use strict';

/* Controllers */


/*
function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

NOTE: Although Angular allows you to create Controller functions in the global scope, this is not recommended. In a real application you should use the .controller method
*/

angular.module('myApp.controllers', []).
  controller('HeaderController', ['$scope','$location', function($scope,$location) {
     $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }; 
  }])
  .controller('HomeCtrl', ['$scope', function($scope,linksService) {
  
  }])
  .controller('RescCtrl',  ['$scope', 'linksService',function($scope, linksService) {
      //Use Resource to get links from JSON file
      $scope.links = linksService.getData(function(resp) {
        }, function(err) {
            //handle error
        });
      
  }])
  .controller('default', [function() {

  }]);