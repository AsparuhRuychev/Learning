'use strict';

angular.module('PartyTalentApp.Prices', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Prices', {
    templateUrl: 'screens/prices.html',
    controller: 'PricesCtrl'
  });
}])

.controller('PricesCtrl', [function() {

}]);