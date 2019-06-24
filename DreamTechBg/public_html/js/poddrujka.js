'use strict';

angular.module('DreamTechApp.poddrujka', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/uslugi/poddrujka', {
                    templateUrl: 'screens/poddrujka.html',
                    controller: 'PoddrujkaCtrl'
                });
            }])

        .controller('PoddrujkaCtrl', [function ($scope) {

            }]);


