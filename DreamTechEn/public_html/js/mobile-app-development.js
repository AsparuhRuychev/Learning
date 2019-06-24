'use strict';

angular.module('DreamTechApp.mobile-app-development', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/services/mobile-app-development', {
                    templateUrl: 'screens/mobile-app-development.html',
                    controller: 'Mobile-app-developmentCtrl'
                });
            }])

        .controller('Mobile-app-developmentCtrl', [function ($scope) {

            }]);


