let app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("https://hemantdutta.github.io/JSON-Repo/test.json")
        .then(function (response) {
            $scope.myWelcome = response.data;
        });
});
