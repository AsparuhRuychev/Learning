'use strict';

angular.module('PartyTalentApp.Main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Main', {
    templateUrl: 'screens/main.html',
    controller: 'MainContrl'
  });
}]);

