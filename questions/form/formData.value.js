(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .value('FormDataModel', FormDataModel);
 
    function FormDataModel() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.age = '';
        this.gender = '';
        this.companyName = '';
        this.finances = '';

    }
})();