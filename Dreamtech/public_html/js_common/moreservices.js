'use strict';

angular.module('DreamTechApp.moreservices', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/moreservices', {
                    templateUrl: 'screens_' + window.language_code + '/moreservices.html',
                    controller: 'moreservicesCtrl'
                });
            }])

        .controller('moreservicesCtrl', [function () {

            }]);
