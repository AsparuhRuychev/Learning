'use strict';

angular.module('DreamTechApp.za-nas', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/za-nas', {
                    templateUrl: 'screens/za-nas.html',
                    controller: 'Za-nasCtrl'
                });
            }])

        .controller('Za-nasCtrl', [function ($scope) {

            }]);


