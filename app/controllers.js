var plControllers = angular.module('myApp.controllers', []);

plControllers.controller('MainController',
    ['$scope', '$http', function ( $scope, $http){
        alert("main");
    }]);

plControllers.controller('RegistrationController',
    ['$scope', '$http', function ( $scope, $http){

        alert("registration");
    }]);

plControllers.controller('LogInController',
    ['$scope', '$http', function ( $scope, $http){

        alert("login");
    }]);