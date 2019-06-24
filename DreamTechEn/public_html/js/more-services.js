'use strict';

angular.module('DreamTechApp.more-services', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/more-services', {
                    templateUrl: 'screens/more-services.html',
                    controller: 'More-servicesCtrl'
                });
            }])

        .controller('More-servicesCtrl', [function ($scope) {

            }]);


