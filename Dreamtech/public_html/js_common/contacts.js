'use strict';

angular.module('DreamTechApp.contacts', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/contact', {
                    templateUrl: 'screens_' + window.language_code + '/contacts.html',
                    controller: 'ContactsCtrl'
                });
            }])

        .controller('ContactsCtrl', [function () {

            }]);
