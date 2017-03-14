/**
 * Created by gaujac on 31/01/17.
 */
ex2App.controller('ex2AppCtrl', ["$http","$cookies",function ($http,$cookies) {
    var self = this;

    this.services= [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }];

    // services_select;

    this.total = function () {
        return
    };
    this.toggleActive = function () {
    }
}]);