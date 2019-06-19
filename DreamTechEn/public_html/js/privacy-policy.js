'use strict';

angular.module('DreamTechApp.privacy-policy', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/privacy-policy', {
                    templateUrl: 'screens/privacy-policy.html',
                    controller: 'Privacy-policyCtrl'
                });
            }])

        .controller('Privacy-policyCtrl', [function ($scope) {

            }]);


