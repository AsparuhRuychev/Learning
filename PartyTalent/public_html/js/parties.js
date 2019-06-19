'use strict';

angular.module('PartyTalentApp.Parties', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Parties', {
    templateUrl: 'screens/parties.html',
    controller: 'PartiesCtrl'
  });
}])

.controller('PartiesCtrl', [function() {

}]);