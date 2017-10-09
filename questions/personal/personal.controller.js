(function() {
        'use strict';

        angular
            .module('wizardApp')
            .controller('PersonalController', PersonalController);

        PersonalController.$inject = ['$scope', '$state'];

        function PersonalController($scope, $state) {
            var vm = this;
            vm.title = 'Please tell us about yourself.';

            $scope.personalState = 0;

            $scope.currentState = function(param) {
                if ($scope.validateForm()) {
                    $scope.personalState = param;
                }
            }

            $scope.goToNext = function(){
                if ($scope.validateForm()){
                    $state.go("form.company")
                }
            }

            $scope.validateForm = function() {

                if ($scope.formData.email !== null && $scope.formData.email !== "") {
                    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                    var email = $scope.formData.email
                    if (reg.test(email) == false) {
                    $scope.error = "Please enter a valid E-mail Address"
                    $scope.hasError = true;
                    return false
                    }
                }

                if(isNaN($scope.formData.age)){
                    $scope.error = "Please enter a number as your age"
                    $scope.hasError = true;
                    return false;
                }

            $scope.hasError = false;
            return true;
        }


        activate();

        ////////////////

        function activate() {
            console.log('Personal feature loaded!');
        }
    }
})();