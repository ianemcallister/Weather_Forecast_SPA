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