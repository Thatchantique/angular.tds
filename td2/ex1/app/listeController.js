/**
 * Created by Gaujac on 07/02/2017.
 */
listApp1.controller('listAppController', ["$http", function ($http) {


    var self = this;
    this.includedItems = [];
    this.dispoItems = [];
    $http.get("./app/dispoItems.json").then(
        function (rep) {
            self.dispoItems = rep.data;
        }
    );

    this.selectItems = function () {
        self.includedItems.push(this.selectedDispoItems[0]);
        nb = self.dispoItems.indexOf(this.selectedDispoItems[0]);
        self.dispoItems.splice(nb, 1);
        //Je supprime à l'index nb 1 char
    };

    this.deselectItems = function () {

        self.dispoItems.push(this.selectedDispoItems[0]);
        nb = self.includedItems.indexOf(this.selectedDispoItems[0]);
        self.includedItems.splice(nb, 1);
        //Chemin inverse

    };


    this.step = 0;
    //Variable d'état agissant sur les vues et prenant les valeurs 1 : choix des produits ou 2 : visualisation du choix

    this.addToIncluded = function () {
        //Ajoute les produits disponibles en surbrillance (selectedDispoItems) à la liste des produits à inclure (includedItems)

        this.selectedDispoItems.forEach(function (elem) {
            self.includedItems.push(elem);
            nb = self.dispoItems.indexOf(elem);
            self.dispoItems.splice(nb, 1);
        })

    };

    this.addAllToIncluded = function () {
        //Ajoute tous les produits disponibles (dispoItems) à la liste des produits à inclure (includedItems)

        self.dispoItems.forEach(function (elem) {
            self.includedItems.push(elem);
        });

        self.dispoItems = [];

    };

    this.removeFromIncluded = function () {
        //Retire les produits sélectionnés en surbrillance (selectedIncludedItems) pour les remettre dans la liste des produits disponibles (items)

        this.selectedIncludeItems.forEach(function (elem) {
            self.dispoItems.push(elem);
            nb = self.includedItems.indexOf(elem);
            self.includedItems.splice(nb, 1);
        })

    };

    this.RemoveAllFromIncluded = function () {
        //Retire tous les produits à inclure (includedItems) pour les remettre dans la liste des produits disponibles (items)

        this.includedItems.forEach(function (elem) {
            self.dispoItems.push(elem)
        });
        self.includedItems = [];
    }


}]);