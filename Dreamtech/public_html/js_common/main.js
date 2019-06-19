'use strict';

angular.module('DreamTechApp.main', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/main', {
                    templateUrl: 'screens_' + window.language_code + '/main.html',
                    controller: 'MainCtrl'
                });
            }])

        .controller('MainCtrl', [function ($scope) {

            }]);