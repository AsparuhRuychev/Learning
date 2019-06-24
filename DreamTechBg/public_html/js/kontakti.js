'use strict';

angular.module('DreamTechApp.kontakti', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/kontakti', {
                    templateUrl: 'screens/kontakti.html',
                    controller: 'KontaktiCtrl'
                });
            }])

        .controller('KontaktiCtrl', [function ($scope) {

            }]);


