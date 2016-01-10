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

    .when('/forecast/:days', {
        templateUrl: 'src/pages/forecast.htm',
        controller: 'forecastController'
    })

});

//SERVICES
weatherApp.service('cityService', function() {

	this.city = "New York, NY";

})

//CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

	$scope.city = cityService.city;

	$scope.$watch('city', function () {
		cityService.city = $scope.city;
	})

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {

	$scope.city = cityService.city;

	$scope.days = $routeParams.days || '2';

	//use resource to reach out to the api
	$scope.weatherAPI = 
	$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=1c4837379b96215d5c04282033857b31",  {
		callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

	$scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

	//convert to Fareheit
	$scope.convertToFahrenheit = function(degK) {
		return Math.round((1.8 * (degK - 273)) + 32);
	}

	//convert the date to readable
	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}
}]);