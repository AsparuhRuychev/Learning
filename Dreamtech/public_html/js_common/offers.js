'use strict';

angular.module('DreamTechApp.offers', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/offers', {
                    templateUrl: 'screens_' + window.language_code + '/offers.html',
                    controller: 'OffersCtrl'
                });
            }])

        .controller('OffersCtrl', [function () {

            }]);