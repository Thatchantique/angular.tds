/**
 * Created by Gaujac on 28/02/2017.
 */
var CurrencyController = CurrencyApp.controller("CurrencyController", ['$http', function ($http) {

    var self = this;
    self.currencies = new Object();
    self.from;
    self.to;
    self.what;
    self.result;

    $http.get('app/data/currencymap.json').success(function (data, status, headers, config) {
        self.currencies = data;
    }).error(function (data, status, headers, config) {
        console.log("Erreur avec le statut Http : " + status);
    });

    self.swap = function () {

    };

    self.getResult = function () {
        return self.result;
    }

}
]);