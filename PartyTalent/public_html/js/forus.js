'use strict';

angular.module('PartyTalentApp.ForUs', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ForUs', {
    templateUrl: 'screens/forus.html',
    controller: 'ForUsCtrl'
  });
}])

.controller('ForUsCtrl', [function() {
}]);

