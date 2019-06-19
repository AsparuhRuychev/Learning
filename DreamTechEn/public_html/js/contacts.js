'use strict';

angular.module('DreamTechApp.contacts', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/contacts', {
                    templateUrl: 'screens/contacts.html',
                    controller: 'ContactsCtrl'
                });
            }])

        .controller('ContactsCtrl', [function ($scope) {

            }]);


