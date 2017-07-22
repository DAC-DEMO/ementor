var app = angular.module("app", ["ngRoute", "ngCookies"]);


app.config(function($routeProvider) {

    $routeProvider.otherwise("/");

    $routeProvider.when("/", {
        "templateUrl": "./src/views/login.html",
        "controller": "login"
    });

    $routeProvider.when("/login", {
        "templateUrl": "./src/views/login.html",
        "controller": "login"
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



app.run(function($location, $rootScope, $cookies) {
    $rootScope.$on("$locationChangeStart", function(event, next, current) {

        // PLACE WHERE WE CAN WRITE LOGIC FOR URL CHANGGE
        console.log(new Date());

        var userid = $cookies.getObject('userid');
        if (userid == undefined) {
            $location.path("/");

        }
    });
});