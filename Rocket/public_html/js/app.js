'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('RocketApp', [
    'ngRoute'
]).config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

myApp.controller('MainContrl', function ($scope, $http) {
    $scope.dispatcher = new Dispatcher();
    $scope.rockets = new Array();
    $scope.timerID = -1;
    $scope.backgroundStartPosition = 0;
    $scope.isStarted = false;

    $scope.start = function () {
        for (let index = 0; index < $scope.rockets.length; index++) {
            let element = $scope.rockets[index];
            element.registerForEvent('timeEvent', $scope.dispatcher);
        }
        $scope.isStarted = true;
        if ($scope.timerID !== -1) {
            clearInterval($scope.timerID);
            $scope.timerID = -1;
        }
        $scope.init();
    };
    $scope.stop = function () {
        for (let index = 0; index < $scope.rockets.length; index++) {
            let element = $scope.rockets[index];
            element.unregisterForEvent('timeEvent', $scope.dispatcher);
            document.getElementById('container').style.backgroundPosition = "right 0px bottom 0px";
        }
        $scope.isStarted = false;
    };
    $http.get("https://api.spacexdata.com/v2/rockets")
            .then(function (response)
            {
                console.log(response);
                if (response.data) {
                    for (let index = 0; index < response.data.length; index++) {
                        let element = response.data[index];
                        if (element.rocketid && element.first_stage && element.first_stage.fuel_amount_tons) {
                            let currentRocket = new Rocket(element.rocketid, element.first_stage.fuel_amount_tons);
                            if (element.second_stage && element.second_stage.fuel_amount_tons) {
                                currentRocket.addFuel(element.second_stage.fuel_amount_tons);
                            }
                            $scope.rockets.push(currentRocket);
                        }
                    }
                }
            }
            );
    $scope.init = function () {
        $scope.timerID = setInterval(function () {
            if ($scope.isStarted) {
                $scope.dispatcher.dispatch('timeEvent', null);
                let isAllRocketsFailed = true;
                $scope.backgroundStartPosition -= 10;
                for (let index = 0; index < $scope.rockets.length; index++) {
                    let rocket = $scope.rockets[index];
                    if (rocket.isVisible) {
                        isAllRocketsFailed = false;
                    }
                }
                ;
                if (isAllRocketsFailed) {
                    $scope.stop();
                    alert("All rockets reached the desired cordinates. Success!");
                }
                document.getElementById('container').style.backgroundPosition = "right 0px bottom " + $scope.backgroundStartPosition + "px";
            }
            ;
        }, 100);
    };
    $scope.finish = function () {
        alert("All rockets reached the desired cordinates. Success!");
    };
});

class DispatcherEvent {
    constructor(eventName) {
        this.eventName = eventName;
        this.callbacks = [];
    }

    registerCallback(callback) {
        this.callbacks.push(callback);
    }

    unregisterCallback(callback) {
        const index = this.callbacks.indexOf(callback);
        if (index > -1) {
            this.callbacks.splice(index, 1);
        }
    }

    fire(data) {
        const callbacks = this.callbacks.slice(0);
        callbacks.forEach((callback) => {
            callback.onTimeEvent(data);
        });
    }
}
;

class Dispatcher {
    constructor() {
        this.events = {};
    }

    dispatch(eventName, data) {
        const event = this.events[eventName];
        if (event) {
            event.fire(data);
        }
    }

    on(eventName, callback) {
        let event = this.events[eventName];
        if (!event) {
            event = new DispatcherEvent(eventName);
            this.events[eventName] = event;
        }
        event.registerCallback(callback);
    }

    off(eventName, callback) {
        const event = this.events[eventName];
        if (event && event.callbacks.indexOf(callback) > -1) {
            event.unregisterCallback(callback);
            if (event.callbacks.length === 0) {
                delete this.events[eventName];
            }
        }
    }
}
;

class Rocket {
    constructor(rocketID, maxFuel) {
        this.rocketID = rocketID;
        this.y = 0;
        this.maxFuel = maxFuel;
        this.currentFuel = maxFuel;
        this.isVisible = true;
    }

    addFuel(fuel) {
        this.maxFuel += fuel;
        this.currentFuel = this.maxFuel;
    }

    onTimeEvent(data) {
        if (this.y < window.screen.height / 2.0) {
            this.y += 2; //px per second
        }
        ;
        this.currentFuel -= 0.1; //1 ton per second
        if (this.currentFuel <= 0) {
            this.isVisible = false;
        }
        console.log('RocketID=' + this.rocketID + ' currentFuel is ' + this.currentFuel);
        this.updateUI();
    }

    registerForEvent(eventName, dispatcher) {
        dispatcher.on(eventName, this);
    }

    unregisterForEvent(eventName, dispatcher) {
        dispatcher.off(eventName, this);
        this.reset();
    }

    reset() {
        this.y = 0;
        this.currentFuel = this.maxFuel;
        this.isVisible = true;
        this.updateUI();
    }

    updateUI() {
        if (this.isVisible) {
            let element = document.getElementById("rocket" + this.rocketID);
            element.classList.remove("fadeOut");
            element.style.bottom = this.y + "px";
            element.style.visibility = 'visible';
            element.innerHTML = Math.round(this.currentFuel);
            element = document.getElementById("flame" + this.rocketID);
            element.style.display = "inline";
            element.style.bottom = this.y - 95 + "px";
            if (element.style.visibility === 'hidden') {
                element.style.visibility = 'visible';
            } else {
                element.style.visibility = 'hidden';
            }
        } else {
            let element = document.getElementById("rocket" + this.rocketID);
            element.classList.add("fadeOut");
            element = document.getElementById("flame" + this.rocketID);
            element.style.visibility = 'hidden';

        }
        ;
    }
}
;

