'use strict';

angular.module('DreamTechApp.web-development', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/services/web-development', {
                    templateUrl: 'screens/web-development.html',
                    controller: 'Web-developmentCtrl'
                });
            }])

        .controller('Web-developmentCtrl', [function ($scope) {

            }]);


