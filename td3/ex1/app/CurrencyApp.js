/**
 * Created by Gaujac on 28/02/2017.
 */
var CurrencyApp = angular.module("CurrencyApp");

angular.module('httpExample', [])
    .config(['$sceDelegateProvider', function ($sceDelegateProvider) {
        // We must whitelist the JSONP endpoint that we are using to show that we trust it
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://free.currencyconverterapi.com/**'
        ]);
    }]);