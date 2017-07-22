var app = angular.module("app");


app.controller("page2", function($scope) {
    console.log("Page2");

    $scope.data1 = { "title": "page2 information" };
    $scope.user = {};


    $scope.register = function() {
        console.log($scope.user);
    }
});