(function () {
    'use strict';
 
    angular
        .module('wizardApp')
        .controller('CompanyController', CompanyController)
        .directive("datepicker", function () { //Datepicker Directive
    function link(scope, element, attrs, controller) {
        var requiredParam = attrs.datepicker === 'true';
        if (requiredParam) {
            element.datepicker({
                dateFormat: "yy-mm-dd",
                maxDate: '0',
                changeYear: true,
                changeMonth: true
            });
        }
    }

    return {
        require: 'ngModel',
        link: link
    };
});
 
    CompanyController.$inject = ['$scope', '$state', '$location', '$stateParams'];
 
    function CompanyController($scope, $state, $location, $stateParams) {
        var vm = this;
        vm.title = 'Tell us about your company!';

        $scope.companyState = 0;

        if ($stateParams.currentState && $stateParams.currentState >= 0 && $stateParams.currentState <= 4){
            $scope.companyState = parseInt($stateParams.currentState);
        }

        //Used to set which page of the section we are on
        $scope.currentState = function(param) {
            if ($scope.validateForm()) {
                $scope.companyState = param;
            }
        }

        //To move to next section
        $scope.goToNext = function() {
            if ($scope.validateForm()) {
                $state.go("form.metrics")
            }
        }

        $scope.goToPrev = function(state) {
            if ($scope.validateForm()) {
                $location.path("/form/personal/1")
            }
        }

        $scope.validateForm = function(){
            if($scope.companyState === 2){
                
            }
            return true;
        }

        $(function() {
            var nativeDateInputIsSupported = Modernizr.inputtypes.date;
            if (!nativeDateInputIsSupported) {
                $scope.datePickerValue = "true"
            }
        });


        activate();
 
        ////////////////
 
        function activate() {
            
           
        }
    }
})();