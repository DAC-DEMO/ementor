var app = angular.module("app");

app.controller("page1", function($scope) {

    $scope.data = { "title": "team6", "view1": true, "view1Button": "FIRST BUTTON", "view2Button": "SECOND BUTTON" };

    $scope.moduleList = [
        { "title": "JAVA", "desc": "Java Module" },
        { "title": "CPP", "desc": "CPP Module" },
        { "title": "PHP", "desc": "PHP Module" },
    ];


    $scope.toggleView = function() {
        $scope.data.view1 = !$scope.data.view1;
    };

    $scope.getData = function(item) {

        $scope.data.view1 = false;
        $scope.qdataList = [{
                "id": 1,
                "qid": 1,
                "question": "What is Programming Language?"
            },

            {
                "id": 2,
                "qid": 2,
                "question": "What is Java Language?"
            },

            {
                "id": 3,
                "qid": 3,
                "question": "What is callback ?"
            }
        ];
    }
});