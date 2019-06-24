'use strict';

angular.module('DreamTechApp.dopulnitelni-uslugi', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/dopulnitelni-uslugi', {
                    templateUrl: 'screens/dopulnitelni-uslugi.html',
                    controller: 'Dopulnitelni-uslugiCtrl'
                });
            }])

        .controller('Dopulnitelni-uslugiCtrl', [function ($scope) {

            }]);


