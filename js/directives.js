'use strict';

/* Directives */


angular.module('myApp.directives', []).directive( 'wpAdditionalDetails', function() {
  return {
    restrict : 'E',
    scope : {
      headline : '@',
      hint: '@',
      classes : '@class',
      id : '@',
      value : '='
    },
    controller : [ '$scope', function($scope) {
      $scope.open = false;
    } ],
    link : function($scope, elem, attrs, ctrl) {
     var initListener = $scope.$watch('value', function() {
      if ($scope.value && $scope.value.length !== 0) {
       $scope.open = true;
       elem.find('.sectionIndicator').html('&ndash;');
                                            initListener(); // self destruct
                                          }
                                        });
     $scope.toggleState = function() {
      if ($scope.open) {
        $scope.open = false;
        elem.find('.sectionIndicator').html('+');
      } else {
        $scope.open = true;
        elem.find('.sectionIndicator').html('&ndash;');
      }
    };
  },
  replace : true,
  transclude : true,
  template : '<div id="{{id}}" class="{{classes}}" ng-class="{collapsed: !open, open: open}"><div ng-click="toggleState()">  <div class="sectionHeader" title="{{hint}}"> {{headline}} <span class="sectionIndicator pull-right">+</span></div> </div> <div ng-show="open" class="inside" ng-transclude></div> </div>'
};
});
