'use strict';

angular.module('PartyTalentApp.Us', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Us', {
    templateUrl: 'screens/us.html',
    controller: 'UsCtrl'
  });
}])

.controller('UsCtrl', [function() {

}]);