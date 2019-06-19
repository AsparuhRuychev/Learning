'use strict';

angular.module('DreamTechApp.services', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/services', {
                    templateUrl: 'screens_' + window.language_code + '/services.html',
                    controller: 'servicesCtrl'
                });
            }])

        .controller('servicesCtrl', [function () {

            }]);