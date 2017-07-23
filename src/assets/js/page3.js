var app = angular.module("app");


app.controller("page3", function($scope) {
    console.log("Page3");

    $scope.data1 = { "title": "PAGE 3" };

    $scope.dataList = [{
            "id": 1,
            "question": "What is your name?",
            "divcolor": "#4caf50",

            "optionList": [{
                "oid": 1,
                "option": "CDAC"
            }, {
                "oid": 2,
                "option": "NCST"
            }, {
                "oid": 3,
                "option": "DAC"
            }],

            "useroption": ""
        },

        {
            "id": 2,
            "question": "What is your fav color?",
            "divcolor": "rgba(255, 193, 7, 0.65)",
            "optionList": [{
                "oid": 1,
                "option": "RED"
            }, {
                "oid": 2,
                "option": "GREE"
            }, {
                "oid": 3,
                "option": "BLUE"
            }]
        }
    ];


    $scope.submit = function() {
        console.log($scope.dataList);
    }
});