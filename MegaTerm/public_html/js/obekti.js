'use strict';

angular.module('MegaTermApp.obekti', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/obekti', {
                    templateUrl: 'screens/obekti.html',
                    controller: 'ObektiCtrl'
                });
            }])

        .controller('ObektiCtrl', [function ($scope) {

            }]);