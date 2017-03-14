/**
 * Created by guillaume on 14/03/17.
 */
var routeApp = angular.module("routeApp",['ngRoute', 'routeCtrl']);

routeApp.config(['$routeProvider'], function($routeProvider){
    $routeProvider
        .when('/TD1_1',{
            templateUrl:'../partials/TD1/Ex1/index.html',
            controller:"myAppCtrl"
        })
        .when('/TD2_1',{
            templateUrl:'part',
            controller:"listAppController"
        })
});
/** TODO Changer l'arborescence pour les controlleurs **/