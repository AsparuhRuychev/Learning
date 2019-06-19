'use strict';

angular.module('PartyTalentApp.Galery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Galery', {
    templateUrl: 'screens/galery.html',
    controller: 'GaleryCtrl'
  });
}])

.controller('GaleryCtrl', function($scope, $http) {
    $http.get("js/list_photos.js")
        .then(function (response) 
        {
            $scope.photos = response.data;
        }
    );
    $http.get("js/list_videos.js")
        .then(function (response) 
        {
            $scope.videos = response.data;
        }
    );
    $scope.playVideo = function(videoElm)
    {
        $('#videoModal').modal('show');
        var video = $('#videoModalTag')[0];
        video.src = videoElm.video.url;
        video.load();
        video.currentTime = 0;
        video.play();
    };
});

