(function() {
    'use strict';

    angular
        .module('wizardApp')
        .controller('PersonalController', PersonalController);

    PersonalController.$inject = ['$scope', '$state', '$stateParams'];

    function PersonalController($scope, $state, $stateParams) {
        var vm = this;
        vm.title = 'Please tell us about yourself.';
        $scope.personalState = 0;

        if ($stateParams.currentState && $stateParams.currentState >= 0 && $stateParams.currentState <= 1){
            $scope.personalState = parseInt($stateParams.currentState);
        }
  



        //Used to set which page of the section we are on
        $scope.currentState = function(param) {
            if ($scope.validateForm()) {
                $scope.personalState = param;
            }
        }

        //To move to next section
        $scope.goToNext = function() {
            if ($scope.validateForm()) {
                $state.go("form.company")
            }
        }

        //All Validation happens here, based on personalState
        $scope.validateForm = function() {

            //Page 1
            if ($scope.personalState === 0) {

                //Email Format
                if ($scope.formData.email !== null && $scope.formData.email !== "") {
                    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    var email = $scope.formData.email
                    if (reg.test(email) == false) {
                        $scope.error = "Please enter a valid E-mail Address"
                        $scope.hasError = true;
                        return false;
                    }
                }
                //Email Is Not Blank
                if ($scope.formData.email === "" || $scope.formData.email === null) {
                    $scope.error = "Email is required"
                    $scope.hasError = true;
                    return false;
                }
            }

            //Page 2
            if ($scope.personalState === 1) {
                //Password Matching
                if ($scope.formData.password !== "" && $scope.formData.passwordVerification !== ""
                    && $scope.formData.password !== null && $scope.formData.passwordVerification !== null) {
                    if ($scope.formData.password !== $scope.formData.passwordVerification) {
                        $scope.error = "Passwords must match"
                        $scope.hasError = true;
                        return false;
                    }
                }
                //Password Is Not Blank
                if ($scope.formData.password === "") {
                    $scope.error = "Password is required"
                    $scope.hasError = true;
                    return false;
                }
            }

            $scope.hasError = false;
            return true;
        }

        activate();

        ////////////////

        function activate() {
         
        }
    }
})();