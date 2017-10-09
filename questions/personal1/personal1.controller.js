(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('Personal1Controller', Personal1Controller);

    Personal1Controller.$inject = [];
 
    function Personal1Controller() {
        var vm = this;
        vm.title = 'Please tell us about yourself 2.';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log('Personal1 feature loaded!');  
        }
    }
})();
