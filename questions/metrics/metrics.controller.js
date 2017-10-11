(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('MetricsController', MetricsController);
 
    MetricsController.$inject = [];
 
    function MetricsController() {
        var vm = this;
        vm.title = 'Let\'s set up your metrics!';
        
        activate();
 
        ////////////////
 
        function activate() {
            console.log('Metrics feature loaded!');
        }
    }
})();