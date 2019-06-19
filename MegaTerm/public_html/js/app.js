'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('MegaTermApp', [
    'ngRoute',
    'MegaTermApp.zanas',
    'MegaTermApp.produkti',
    'MegaTermApp.uslugi',
    'MegaTermApp.obekti',
    'MegaTermApp.faq',
    'MegaTermApp.kontakti'
]).
        config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('');
                $routeProvider.otherwise({redirectTo: '/zanas'});
            }]);

myApp.controller('MainContrl', function ($scope, $location, $http, $rootScope) {
    $scope.data = {"faq": ''};
    $scope.changeView = function (path) {
        $location.path(path);
        window.scrollTo(0, 900);
    };
    $scope.showModal = function (el) {
        $scope.service = $scope.services[el];
        $('#myModal1').modal('show');
    };
    $scope.showMyModal = function (modlID) {
        $('#' + modlID).modal('show');
    };
    $scope.openURL = function (url){
        window.open(url, '_blank');
    };
    $scope.showProduct = function (url){
        $('#my_frame').src = url;
    };
    $scope.showFirstQuestion = function(faq){
        $scope.data.faq = faq;
        document.getElementById("secondCont").style.display = "none";
        document.getElementById("thirdCont").style.display = "none";
        document.getElementById("fourthCont").style.display = "none";
        document.getElementById("firstCont").style.display = "block";
        document.getElementById("firstCont").innerHTML = "В ръководството ни ще намерите детайлна информация за всички типове хостинг услуги. От различните видове хостинг и характеристиките, които изграждат услугата, до информация която ще ви помогне да разберете какво точно купувате, когато заплащате за уеб хостинг услуги. Гарантираме, че разширеното ни ръководство ще отговори на въпросите ви за уеб хостинга ";
        document.getElementById("firstquest").style.backgroundColor = "#333";
        document.getElementById("secondquest").style.backgroundColor = "#CECECE";
        document.getElementById("thirdquest").style.backgroundColor = "#CECECE";
        document.getElementById("fourthquest").style.backgroundColor = "#ededed";
        document.getElementById("fifthquest").style.backgroundColor = "#ededed";
        document.getElementById("sixthquest").style.backgroundColor = "#CECECE";
        document.getElementById("seventhquest").style.backgroundColor = "#CECECE";
        document.getElementById("eightquest").style.backgroundColor = "#ededed";
        document.getElementById("firstquest").style.color = "#fff";
        document.getElementById("secondquest").style.color = "black";
        document.getElementById("thirdquest").style.color = "black";
        document.getElementById("fourthquest").style.color = "black";
        document.getElementById("fifthquest").style.color = "black";
        document.getElementById("sixthquest").style.color = "black";
        document.getElementById("seventhquest").style.color = "black";
        document.getElementById("eightquest").style.color = "black";
    };
    $scope.showSecondQuestion = function(faq){
        $scope.data.faq = faq;
        document.getElementById("secondCont").style.display = "none";
        document.getElementById("thirdCont").style.display = "none";
        document.getElementById("fourthCont").style.display = "none";
        document.getElementById("firstCont").style.display = "block";
        document.getElementById("firstCont").innerHTML = "Абстрактно погледнато уеб хостингът наподобява съжителството в една жилищна сграда на множество наематели. Наемате апартамент, в който вие ще живеете и който ще бъде вашето лично пространство. При уеб хостинга вие ще имате свое собствено място на сървъра, което ще зависи от избрания хостинг план.";
        document.getElementById("firstquest").style.backgroundColor = "#ededed";
        document.getElementById("secondquest").style.backgroundColor = "#333";
        document.getElementById("thirdquest").style.backgroundColor = "#CECECE";
        document.getElementById("fourthquest").style.backgroundColor = "#ededed";
        document.getElementById("fifthquest").style.backgroundColor = "#ededed";
        document.getElementById("sixthquest").style.backgroundColor = "#CECECE";
        document.getElementById("seventhquest").style.backgroundColor = "#CECECE";
        document.getElementById("eightquest").style.backgroundColor = "#ededed";
        document.getElementById("firstquest").style.color = "black";
        document.getElementById("secondquest").style.color = "#fff";
        document.getElementById("thirdquest").style.color = "black";
        document.getElementById("fourthquest").style.color = "black";
        document.getElementById("fifthquest").style.color = "black";
        document.getElementById("sixthquest").style.color = "black";
        document.getElementById("seventhquest").style.color = "black";
        document.getElementById("eightquest").style.color = "black";
    };
    $scope.showThirdQuestion = function (faq){
        $scope.data.faq = faq;
        document.getElementById("firstCont").style.display = "none";
        document.getElementById("thirdCont").style.display = "none";
        document.getElementById("fourthCont").style.display = "none";
        document.getElementById("secondCont").innerHTML = "Какво е домейн име? Домейн името представлява адресът, на който можете да намерите сайта си в Интернет. За да заредят определена уеб страница, потребителите изписват домейн името в полето на браузъра и лесно откриват уебсайта ви в Мрежата.";
        document.getElementById("secondCont").style.display = "block";
        document.getElementById("firstquest").style.backgroundColor = "#ededed";
        document.getElementById("secondquest").style.backgroundColor = "#CECECE";
        document.getElementById("thirdquest").style.backgroundColor = "#333";
        document.getElementById("fourthquest").style.backgroundColor = "#ededed";
        document.getElementById("fifthquest").style.backgroundColor = "#ededed";
        document.getElementById("sixthquest").style.backgroundColor = "#CECECE";
        document.getElementById("seventhquest").style.backgroundColor = "#CECECE";
        document.getElementById("eightquest").style.backgroundColor = "#ededed";
        document.getElementById("firstquest").style.color = "black";
        document.getElementById("secondquest").style.color = "black";
        document.getElementById("thirdquest").style.color = "#fff";
        document.getElementById("fourthquest").style.color = "black";
        document.getElementById("fifthquest").style.color = "black";
        document.getElementById("sixthquest").style.color = "black";
        document.getElementById("seventhquest").style.color = "black";
        document.getElementById("eightquest").style.color = "black";
    };
    $scope.showFourthQuestion = function (faq){
        $scope.data.faq = faq;
        document.getElementById("firstCont").style.display = "none";
        document.getElementById("thirdCont").style.display = "none";
        document.getElementById("fourthCont").style.display = "none";
        document.getElementById("secondCont").innerHTML = "За да мигрирате своя сайт от един хостинг акаунт в друг трябва да изпълните няколко много важни стъпки: 1. Мигриране на файловете; 2. Миграция на база данни, Export/Import; 3. Миграция на имейл акаунти, заедно с тяхното съдържание.";
        document.getElementById("secondCont").style.display = "block";
        document.getElementById("firstquest").style.backgroundColor = "#ededed";
        document.getElementById("secondquest").style.backgroundColor = "#CECECE";
        document.getElementById("thirdquest").style.backgroundColor = "#CECECE";
        document.getElementById("fourthquest").style.backgroundColor = "#333";
        document.getElementById("fifthquest").style.backgroundColor = "#ededed";
        document.getElementById("sixthquest").style.backgroundColor = "#CECECE";
        document.getElementById("seventhquest").style.backgroundColor = "#CECECE";
        document.getElementById("eightquest").style.backgroundColor = "#ededed";
        document.getElementById("firstquest").style.color = "black";
        document.getElementById("secondquest").style.color = "black";
        document.getElementById("thirdquest").style.color = "black";
        document.getElementById("fourthquest").style.color = "#fff";
        document.getElementById("fifthquest").style.color = "black";
        document.getElementById("sixthquest").style.color = "black";
        document.getElementById("seventhquest").style.color = "black";
        document.getElementById("eightquest").style.color = "black";
    };
    $scope.showFifthQuestion = function (faq){
        $scope.data.faq = faq;
        document.getElementById("firstCont").style.display = "none";
        document.getElementById("secondCont").style.display = "none";
        document.getElementById("fourthCont").style.display = "none";
        document.getElementById("thirdCont").innerHTML = "Най-голямото предимство на Cloud хостинга е това, че плащате само за ресурсите, които изразходвате. Пълният контрол над услугата ви позволява да променяте ресурсите в зависимост от потреблението. Cloud хостингът e напълно скалируема виртуализационна технология, даваща ви неограничени възможности.";
        document.getElementById("thirdCont").style.display = "block";
        document.getElementById("firstquest").style.backgroundColor = "#ededed";
        document.getElementById("secondquest").style.backgroundColor = "#CECECE";
        document.getElementById("thirdquest").style.backgroundColor = "#CECECE";
        document.getElementById("fourthquest").style.backgroundColor = "#ededed";
        document.getElementById("fifthquest").style.backgroundColor = "#333";
        document.getElementById("sixthquest").style.backgroundColor = "#CECECE";
        document.getElementById("seventhquest").style.backgroundColor = "#CECECE";
        document.getElementById("eightquest").style.backgroundColor = "#ededed";
        document.getElementById("firstquest").style.color = "black";
        document.getElementById("secondquest").style.color = "black";
        document.getElementById("thirdquest").style.color = "black";
        document.getElementById("fourthquest").style.color = "black";
        document.getElementById("fifthquest").style.color = "#fff";
        document.getElementById("sixthquest").style.color = "black";
        document.getElementById("seventhquest").style.color = "black";
        document.getElementById("eightquest").style.color = "black";
    };
    $scope.showSixthQuestion = function (faq){
        $scope.data.faq = faq;
        document.getElementById("firstCont").style.display = "none";
        document.getElementById("secondCont").style.display = "none";
        document.getElementById("fourthCont").style.display = "none";
        document.getElementById("thirdCont").innerHTML = "Разберете как да направите заявка за нов хостинг и домейн с портала за поръчка. Подробно графично обяснение, за да направите поръчка за услуга от ICN.Bg без проблем и затруднения...";
        document.getElementById("thirdCont").style.display = "block";
        document.getElementById("firstquest").style.backgroundColor = "#ededed";
        document.getElementById("secondquest").style.backgroundColor = "#CECECE";
        document.getElementById("thirdquest").style.backgroundColor = "#CECECE";
        document.getElementById("fourthquest").style.backgroundColor = "#ededed";
        document.getElementById("fifthquest").style.backgroundColor = "#ededed";
        document.getElementById("sixthquest").style.backgroundColor = "#333";
        document.getElementById("seventhquest").style.backgroundColor = "#CECECE";
        document.getElementById("eightquest").style.backgroundColor = "#ededed";
        document.getElementById("firstquest").style.color = "black";
        document.getElementById("secondquest").style.color = "black";
        document.getElementById("thirdquest").style.color = "black";
        document.getElementById("fourthquest").style.color = "black";
        document.getElementById("fifthquest").style.color = "black";
        document.getElementById("sixthquest").style.color = "#fff";
        document.getElementById("seventhquest").style.color = "black";
        document.getElementById("eightquest").style.color = "black";
    };
    $scope.showSeventhQuestion = function (faq){
        $scope.data.faq = faq;
        document.getElementById("firstCont").style.display = "none";
        document.getElementById("secondCont").style.display = "none";
        document.getElementById("thirdCont").style.display = "none";
        document.getElementById("fourthCont").innerHTML = "В няколко лесни стъпки можете да трансферирате домейна си към ICN.Bg и да го управлявате удобно чрез клиентския си профил. Разчитайте на пълно съдействие от екипа на ICN.Bg при трансфера на вашето домейн име.";
        document.getElementById("fourthCont").style.display = "block";
        document.getElementById("firstquest").style.backgroundColor = "#ededed";
        document.getElementById("secondquest").style.backgroundColor = "#CECECE";
        document.getElementById("thirdquest").style.backgroundColor = "#CECECE";
        document.getElementById("fourthquest").style.backgroundColor = "#ededed";
        document.getElementById("fifthquest").style.backgroundColor = "#ededed";
        document.getElementById("sixthquest").style.backgroundColor = "#CECECE";
        document.getElementById("seventhquest").style.backgroundColor = "#333";
        document.getElementById("eightquest").style.backgroundColor = "#ededed";
        document.getElementById("firstquest").style.color = "black";
        document.getElementById("secondquest").style.color = "black";
        document.getElementById("thirdquest").style.color = "black";
        document.getElementById("fourthquest").style.color = "black";
        document.getElementById("fifthquest").style.color = "black";
        document.getElementById("sixthquest").style.color = "black";
        document.getElementById("seventhquest").style.color = "#fff";
        document.getElementById("eightquest").style.color = "black";
    };
    $scope.showEightQuestion = function (faq){
        $scope.data.faq = faq;
        document.getElementById("firstCont").style.display = "none";
        document.getElementById("secondCont").style.display = "none";
        document.getElementById("thirdCont").style.display = "none";
        document.getElementById("fourthCont").innerHTML = "SSL сертификатът е гаранция за сигурност – той представлява дигитален сертификат, който удостоверява автентичността на уебсайта ви и криптира информацията чрез SSL технологията. Прочетете за основните видове сертификати и предлаганите от нас протоколи за криптация, с нивото на сигурност и гаранциите, които предоставят.";
        document.getElementById("fourthCont").style.display = "block";
        document.getElementById("firstquest").style.backgroundColor = "#ededed";
        document.getElementById("secondquest").style.backgroundColor = "#CECECE";
        document.getElementById("thirdquest").style.backgroundColor = "#CECECE";
        document.getElementById("fourthquest").style.backgroundColor = "#ededed";
        document.getElementById("fifthquest").style.backgroundColor = "#ededed";
        document.getElementById("sixthquest").style.backgroundColor = "#CECECE";
        document.getElementById("seventhquest").style.backgroundColor = "#CECECE";
        document.getElementById("eightquest").style.backgroundColor = "#333";
        document.getElementById("firstquest").style.color = "black";
        document.getElementById("secondquest").style.color = "black";
        document.getElementById("thirdquest").style.color = "black";
        document.getElementById("fourthquest").style.color = "black";
        document.getElementById("fifthquest").style.color = "black";
        document.getElementById("sixthquest").style.color = "black";
        document.getElementById("seventhquest").style.color = "black";
        document.getElementById("eightquest").style.color = "#fff";
    };
});

