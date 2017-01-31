/**
 * Created by Guillaume on 24/01/2017.
 */


myApp.controller('myAppCtrl', ["$cookies", function($cookies) {
    var message;
    var info;
    var self=this;
    this.message=$cookies.get('message')|| "";
    this.clear = function () {
        self.message = "";
        self.info = "";
    };
    this.save = function () {
        $cookies.put('message',self.message);
        self.info = "Note save";
    };
    this.count = function () {
        return 100 - self.message.length;
    }
}]);






/**var script = function ($scope, $cookies) {
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
};*/

