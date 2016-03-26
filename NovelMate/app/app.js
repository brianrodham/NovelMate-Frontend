
    var app = angular.module('novelmate', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'WriterController',
                templateUrl: 'app/views/writer.html'
            })
            .otherwise({ redirectTo: '/' });
    });
