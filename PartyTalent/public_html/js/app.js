'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('PartyTalentApp', [
  'ngRoute',
  'PartyTalentApp.Main',
  'PartyTalentApp.ForUs',
  'PartyTalentApp.Parties',
  'PartyTalentApp.Prices',
  'PartyTalentApp.Contacts',
  'PartyTalentApp.Us',
  'PartyTalentApp.Galery'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.otherwise({redirectTo: '/Main'});
  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay: true,
        responsive:{
            0:{
              items:1
            },
            600:{
              items:2
            },
            1000:{
              items:2
            }
        }
    });
    $(document.body).on('hidden.bs.modal', function () {
        $("video").each(function() {
            $(this).get(0).pause();
        }); 
    });
}]).
directive('postRepeatDirective', function() {
  return function(scope, element, attrs) {
        $(".fancybox").fancybox({
              openEffect: "none",
              closeEffect: "none"
        });
        $(".zoom").hover(function(){
            $(this).addClass('transition');
        }, function(){
            $(this).removeClass('transition');
        });
  };
}).
run(function($rootScope) {
    $rootScope.refreshIntervalId = null;
});

myApp.controller('MainContrl', function($scope, $location, $http, $rootScope) {
    $scope.currentPhoto = 0;
    $scope.countPhoto = 3;

    $scope.changeView = function(path){
        $location.path( path );    
    };
    $http.get("js/list_parties.js")
        .then(function (response) 
        {
            $scope.parties = response.data;
        }
    );
    $scope.closeNav = function()
    {
        document.getElementById("mySidenav").style.width = "0";
    };
    $scope.openNav = function()
    {
       document.getElementById("mySidenav").style.width = "150px";
    };
    $scope.openURL = function (url){
        window.open(url, '_blank');
    };
    $http.get("js/list_carocel.js")
        .then(function (response) 
        {
            $scope.listCarocel = response.data;
            $scope.currentPhoto = 2;
            $scope.countPhoto = $scope.listCarocel.length;
            console.log($rootScope.refreshIntervalId);
            if($rootScope.refreshIntervalId !== null)
            {
                clearInterval($rootScope.refreshIntervalId);
                $rootScope.refreshIntervalId = null;
            }
            $rootScope.refreshIntervalId = setInterval($scope.rotatePhotos, 8000);
            console.log($rootScope.refreshIntervalId);
        }
    );
    $scope.rotatePhotos = function() {
        var photoNumber = $scope.currentPhoto % $scope.countPhoto; 
        switch (photoNumber) {
            case 0:
            {
                $("#mainCarousel").stop().animate({"height": "0%"},500,function(){
                $(this).css({'background-image': $scope.listCarocel[photoNumber].url})
                       .animate({"height": "100%"},{duration:1000});
                });                
            }
            break;
            case 1:
            {
                $("#mainCarousel").fadeOut("slow", function () {
                        $(this).css("background-image", $scope.listCarocel[photoNumber].url);
                        $(this).fadeIn("slow");
                });                
            }
            break;
            case 2:
            {
                $("#mainCarousel").stop().animate({"width": "0%"},500,function(){
                $(this).css({'background-image': $scope.listCarocel[photoNumber].url})
                       .animate({"width": "100%"},{duration:1000});
                });               
            } 
            break;
            default:
            {
                $("#mainCarousel").stop().animate({"margin-left": "1000px", "height" : "100%"},500,function(){
                $(this).css({'background-image': $scope.listCarocel[photoNumber].url})
                       .animate({"margin-left": "0px"},{duration:1000});
                });                
            }
        }
        $scope.currentPhoto = $scope.currentPhoto + 1;
    };
});

