(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('CompanyController', CompanyController);
 
    CompanyController.$inject = [];
 
    function CompanyController() {
        var vm = this;
        vm.title = 'Tell us about your company!';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log('Company feature loaded!');
        }
    }
})();