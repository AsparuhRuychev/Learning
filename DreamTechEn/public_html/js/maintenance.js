'use strict';

angular.module('DreamTechApp.maintenance', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/services/maintenance', {
                    templateUrl: 'screens/maintenance.html',
                    controller: 'MaintenanceCtrl'
                });
            }])

        .controller('MaintenanceCtrl', [function ($scope) {

            }]);


