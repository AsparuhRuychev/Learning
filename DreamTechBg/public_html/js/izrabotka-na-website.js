'use strict';

angular.module('DreamTechApp.izrabotka-na-website', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/uslugi/izrabotka-na-website', {
                    templateUrl: 'screens/izrabotka-na-website.html',
                    controller: 'Izrabotka-na-websiteCtrl'
                });
            }])

        .controller('Izrabotka-na-websiteCtrl', [function ($scope) {

            }]);


