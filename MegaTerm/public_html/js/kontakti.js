'use strict';

angular.module('MegaTermApp.kontakti', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/kontakti', {
                    templateUrl: 'screens/kontakti.html',
                    controller: 'KontaktiCtrl'
                });
            }])

        .controller('KontaktiCtrl', [function ($scope) {

            }]);

