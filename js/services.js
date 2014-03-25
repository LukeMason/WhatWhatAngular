'use strict';

/* Services */

angular.module('myApp.services', ['ngResource']).factory('linksService', function($resource) {
  return $resource('data/handyLinks.json', { },
      {
          'getData': {method:'GET', isArray: true}
      });
});