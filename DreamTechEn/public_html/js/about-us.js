'use strict';

angular.module('DreamTechApp.about-us', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/about-us', {
                    templateUrl: 'screens/about-us.html',
                    controller: 'About-usCtrl'
                });
            }])

        .controller('About-usCtrl', [function ($scope) {

            }]);


