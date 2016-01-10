//DECLARE MY APP
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTES
weatherApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'src/pages/landingPage.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'src/pages/forecast.htm',
        controller: 'forecastController'
    })

});


//CONTROLLERS
weatherApp.controller('homeController', ['$scope', function ($scope) {


}]);

weatherApp.controller('forecastController', ['$scope', function ($scope) {


}]);