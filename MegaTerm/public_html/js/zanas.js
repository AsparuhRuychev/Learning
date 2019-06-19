'use strict';

angular.module('MegaTermApp.zanas', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/zanas', {
                    templateUrl: 'screens/zanas.html',
                    controller: 'ZanasCtrl'
                });
                
            }])

        .controller('ZanasCtrl', [function ($scope) {
            $scope.currentTitle = "Za Nas | Mega Term"
            }]);