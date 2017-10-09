(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('ResultController', ResultController);
 
    ResultController.$inject = [];
 
    function ResultController() {
        var vm = this;
        vm.title = 'Thanks for signing up!';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log('Result feature loaded!');
        }
    }
})();
