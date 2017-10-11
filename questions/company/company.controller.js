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
 
    CompanyController.$inject = ['$scope', '$state'];
 
    function CompanyController($scope, $state) {
        var vm = this;
        vm.title = 'Tell us about your company!';

        $scope.companyState = 0;

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

        $scope.validateForm = function(){
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
            console.log('Company feature loaded!');
        }
    }
})();