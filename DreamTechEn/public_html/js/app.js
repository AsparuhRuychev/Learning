'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('DreamTechApp', [
    'ngRoute',
    'DreamTechApp.about-us',
    'DreamTechApp.services',
    'DreamTechApp.more-services',
    'DreamTechApp.subscription',
    'DreamTechApp.contacts',
    'DreamTechApp.privacy-policy',
    'ui.router'
]).
        config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider, $urlRouterProvider) {
                $locationProvider.hashPrefix('');
                $('.owl-carousel').owlCarousel({
                    autoplay: false,
                    autoplayHoverPause: true,
                    loop: true,
                    lazyload: true,
                    margin: 5,
                    stagePadding: 5,
                    responsive:{
                        0:{
                            items: 1
                        },
                        767: {
                            items: 2
                        },
                        1300: {
                            items: 3
                        }
                    }
                });
                $routeProvider.otherwise({redirectTo: '/about-us'});
            }]);

myApp.controller('MainContrl', function ($scope, $location, $http, $rootScope) {
    $scope.changeView = function (path) {
        $location.path(path);
        window.scrollTo(0, 0);
    };
    $scope.showModal = function (el) {
        $scope.service = $scope.services[el];
        $('#myModal1').modal('show');
    };
    $scope.showMyModal = function (modlID) {
        $('#' + modlID).modal('show');
    };
    $scope.openURL = function (url) {
        window.open(url, '_blank');
    };
});

