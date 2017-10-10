(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .value('FormDataModel', FormDataModel);
 
    function FormDataModel() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.passwordVerification = '';
        this.companyName = '';
        this.finances = '';

    }
})();