'use strict';

angular.module('DreamTechApp.services', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/services', {
                    templateUrl: 'screens/services.html',
                    controller: 'ServicesCtrl'
                });
            }])

        .controller('ServicesCtrl', [function ($scope) {
                
            }]);


