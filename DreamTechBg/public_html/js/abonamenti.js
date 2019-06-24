'use strict';

angular.module('DreamTechApp.abonamenti', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/abonamenti', {
                    templateUrl: 'screens/abonamenti.html',
                    controller: 'AbonamentiCtrl'
                });
            }])

        .controller('AbonamentiCtrl', [function ($scope) {

            }]);


