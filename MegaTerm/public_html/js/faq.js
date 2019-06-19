'use strict';

angular.module('MegaTermApp.faq', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/faq', {
                    templateUrl: 'screens/faq.html',
                    controller: 'FaqCtrl'
                });
            }])

        .controller('FaqCtrl', [function ($scope) {

            }]);