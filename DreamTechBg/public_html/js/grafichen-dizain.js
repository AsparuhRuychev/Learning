'use strict';

angular.module('DreamTechApp.grafichen-dizain', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/uslugi/grafichen-dizain', {
                    templateUrl: 'screens/grafichen-dizain.html',
                    controller: 'Grafichen-dizainCtrl'
                });
            }])

        .controller('Grafichen-dizainCtrl', [function ($scope) {

            }]);


