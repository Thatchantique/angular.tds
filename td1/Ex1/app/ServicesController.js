/**
 * Created by Guillaume on 24/01/2017.
 */
var messageNote;
var info;

myApp.controller('myAppCtrl', ["$scope","$cookies"]);
var script = function ($scope, $cookies) {
    var note = $cookies.get("note");
    $scope.count = function () {
        return 100 - $scope.message.length;
    };
    $scope.clear = function () {
        $scope.message = "";
        $scope.info = "";
    };
    $scope.save = function () {
        $cookies.put("note", $scope.message);
        $scope.info = "Note sauvegardée";
    };
};