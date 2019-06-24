'use strict';

angular.module('DreamTechApp.politika-za-poveritelnost', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/politika-za-poveritelnost', {
                    templateUrl: 'screens/politika-za-poveritelnost.html',
                    controller: 'Politika-za-poveritelnostCtrl'
                });
            }])

        .controller('Politika-za-poveritelnostCtrl', [function ($scope) {

            }]);


