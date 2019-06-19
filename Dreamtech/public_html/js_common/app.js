'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('DreamTechApp', [
  'ngRoute',
  'DreamTechApp.main',
  'DreamTechApp.offers',
  'DreamTechApp.contacts',
  'DreamTechApp.services',
  'DreamTechApp.moreservices'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:2
            },
            1300:{
                items:3
            }
        }
    });
  $routeProvider.otherwise({redirectTo: '/main'});
}]);

myApp.controller('MainContrl', function($scope, $location, $http, $rootScope) {
    $scope.changeView = function(path){
        $location.path( path );
        window.scrollTo(0, 0);
        $('.navbar').find('.collapse.in').collapse('hide');
    };
    $http.get("js_" + window.language_code + "/list_services.js")
        .then(function (response) 
        {
            $scope.services = response.data;
        }
    );
    $scope.showModal = function (el){
        $scope.service = $scope.services[el];
        $('#myModal1').modal('show');
    };
    $scope.showMyModal = function (modlID){
        $('#' + modlID).modal('show');
    };
    $scope.openURL = function (url){
        window.open(url, '_blank');
    };
    $scope.changeLang = function (lnCode)
    {
        window.location.href = "index_" + lnCode;
    };
});
