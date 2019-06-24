'use strict';

angular.module('DreamTechApp.subscription', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/subscription', {
                    templateUrl: 'screens/subscription.html',
                    controller: 'SubscriptionCtrl'
                });
            }])

        .controller('SubscriptionCtrl', [function ($scope) {
                
            }]);


