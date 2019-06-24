'use strict';

angular.module('DreamTechApp.graphic-design', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/services/graphic-design', {
                    templateUrl: 'screens/graphic-design.html',
                    controller: 'Graphic-designCtrl'
                });
            }])

        .controller('Graphic-designCtrl', [function ($scope) {

            }]);


