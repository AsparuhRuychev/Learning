'use strict';

angular.module('MegaTermApp.produkti', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/produkti', {
                    templateUrl: 'screens/produkti.html',
                    controller: 'ProduktiCtrl'
                });
            }])

        .controller('ProduktiCtrl', [function ($scope) {

            }]);