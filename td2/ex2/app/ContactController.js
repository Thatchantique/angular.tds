/**
 * Created by Gaujac on 14/02/2017.
 */

app_td2_ex2.controller('ctrl_td2_ex2', ['$http', function ($http) {

    var self = this;

    this.contacts = [];
    this.contact = null;
    this.tmpContact = new Object();
    this.operation = null;
    this.edit = false;

    $http.get("./app/contact.json").then(function (rep) {
        self.contacts = rep.data;
    });

    /**
     * Affiche le formulaire de modification du contact
     *
     */
    this.toUpdate = function () {
    };

    /**
     * Affiche le formulaire d'ajout d'un contact
     * @param contact
     */
    this.toAdd = function (contact) {

    };

    /**
     * Ajoute le contact
     */
    this.add = function () {

    };

    /**
     * Met à jour la liste des contacts après validation du formulaire (ajout ou modif)
     */
    this.update = function () {

    };

    /**
     * Supprime de la liste le contact
     * @param contact
     */
    this.delete = function (contact) {

    }
}]);