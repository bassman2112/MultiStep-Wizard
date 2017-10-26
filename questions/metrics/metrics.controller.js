(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('MetricsController', MetricsController);
 
    MetricsController.$inject = ['$scope', '$state', '$location', '$stateParams'];
 
    function MetricsController($scope, $state, $location, $stateParams) {
        var vm = this;
        vm.title = 'Let\'s set up your metrics!';

        $scope.metricsState = 0;

        $scope.currentState = function(param) {
            if ($scope.validateForm()) {
                $scope.metricsState = param;
            }
        }

        $scope.goToNext = function() {
            if ($scope.validateForm()) {
                $state.go("form.result")
            }
        }

        $scope.goToPrev = function(state) {
            if ($scope.validateForm()) {
                $location.path("/form/company/4")
            }
        }

        $scope.validateForm = function(){
            return true;
        }
        
        activate();
 
        ////////////////
 
        function activate() {
           
        }
    }
})();