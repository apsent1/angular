var app = angular.module('myApp', ['myApp.controllers', 'ngRoute'])
    .config(['$routeProvider', function ( $routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl:'partials/main.html',
                controller: "mainController"
            })
            .when("/login", {
                templateUrl: "partials/login.html",
                controller: "LogInController"
            })
            .when("/registration", {
                templateUrl: "partials/registration.html",
                controller: "RegistrationController"
            })
            .when("/drawPanel", {
                templateUrl: "partials/drawPanel.html",
                controller: "DrawController"
            })
            .otherwise({
                redirectTo: '/main'
            });
         }]);