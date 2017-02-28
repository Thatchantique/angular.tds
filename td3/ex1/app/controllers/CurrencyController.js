/**
 * Created by Gaujac on 28/02/2017.
 */
var CurrencyController = CurrencyApp.controller('CurrencyController', ['$http', function ($http) {

    var self = this;
    self.currencies;
    self.what = 1;
    self.result = 1;
    self.from;
    self.to;

    $http.get('../app/data/currencymap.json').then(function (response) {
            self.currencies = response.data;
            self.from = response.data["EUR"];
            self.to = self.currencies["USD"];
        },
        function (response) {
            console.log("Erreur avec le statut Http : " + response.status);
        });

    self.swap = function () {
        var tmp = self.from;
        self.from = self.to;
        self.to = tmp;

        tmp = self.what;
        self.what = self.result;
        self.result = tmp;
    };

    self.getResult = function () {
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q=' + self.from.code + '_' + self.to.code, {jsonpCallbackParam: 'callback'}).then(function (reponse) {
            self.result = reponse.data[self.from.code + '_' + self.to.code].val;
        })
    }

}
]);