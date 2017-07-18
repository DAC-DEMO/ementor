var app = angular.module("app", ["ngRoute"]);


app.config(function($routeProvider) {

    $routeProvider.otherwise("/");

    $routeProvider.when("/", {
        "templateUrl": "./src/views/page1.html",
        "controller": "page1"
    });

    $routeProvider.when("/page1", {
        "templateUrl": "./src/views/page1.html",
        "controller": "page1"
    });

    $routeProvider.when("/page2", {
        "templateUrl": "./src/views/page2.html",
        "controller": "page2"
    });

});