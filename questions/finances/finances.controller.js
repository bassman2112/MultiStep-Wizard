(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('FinancesController', FinancesController);
 
    FinancesController.$inject = [];
 
    function FinancesController() {
        var vm = this;
        vm.title = 'How is your Financial situation?';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log('Finances feature loaded!');
        }
    }
})();