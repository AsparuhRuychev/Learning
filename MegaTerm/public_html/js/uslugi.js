'use strict';

angular.module('MegaTermApp.uslugi', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/uslugi', {
                    templateUrl: 'screens/uslugi.html',
                    controller: 'UslugiCtrl'
                });
            }])

        .controller('UslugiCtrl', [function ($scope) {

            }]);