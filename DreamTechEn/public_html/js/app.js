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
    'DreamTechApp.web-development',
    'DreamTechApp.mobile-app-development',
    'DreamTechApp.maintenance',
    'DreamTechApp.graphic-design'
]).
        config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider, $urlRouterProvider) {

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
                $locationProvider.html5Mode(true);
            }]);

myApp.controller('MainContrl', function ($scope, $location, $http, $rootScope) {
    $scope.changeView = function (path) {
        $location.path(path);
        window.scrollTo(0, 0);
        $('.navbar').find('.collapse.in').collapse('hide');
    };
    $scope.openURL = function (url) {
        window.open(url, '_blank');
    };
    $scope.showHardware = function(){
        document.getElementById("software-details-container").style.display = "none";
        document.getElementById("hardware-details-container").style.display = "block";
    };
    $scope.showSoftware = function(){
        document.getElementById("hardware-details-container").style.display = "none";
        document.getElementById("software-details-container").style.display = "block";
    };
});

