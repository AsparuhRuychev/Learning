'use strict';

angular.module('DreamTechApp.izrabotka-na-mobilno-prilojenie', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/uslugi/izrabotka-na-mobilno-prilojenie', {
                    templateUrl: 'screens/izrabotka-na-mobilno-prilojenie.html',
                    controller: 'Izrabotka-na-mobilno-prilojenieCtrl'
                });
            }])

        .controller('Izrabotka-na-mobilno-prilojenieCtrl', [function ($scope) {

            }]);


