'use strict';

angular.module('PartyTalentApp.Contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Contacts', {
    templateUrl: 'screens/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', [function() {

}]);