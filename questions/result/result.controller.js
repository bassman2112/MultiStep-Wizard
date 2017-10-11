(function() {
    'use strict';

    angular
        .module('wizardApp')
        .controller('ResultController', ResultController);
        

    ResultController.$inject = ['$scope', '$location'];

    function ResultController($scope, $location) {
        var vm = this;
        vm.title = 'Thanks for signing up for VenturX!';

        //Render password as asterisks 
        $scope.passwordDisplay = function() {
            if ($scope.formData.password !== "") {
                var pwd = $scope.formData.password;
                $scope.passwordDisplay = "";

                for (var i = 0; i < pwd.length; i++) {
                    $scope.passwordDisplay += "*"
                };
            };
        };

        //Concatenate currency symbol to data - can be localized
        $scope.formatInvestment = function() {
            if ($scope.formData.capitalInvestment !== "") {
                var currency = "$";
                $scope.formattedCapitalInvestment = currency + $scope.formData.capitalInvestment;
            }

        }

        $scope.formatDate = function(){
            if ($scope.formData.startDate !== ""){
                var date = $scope.formData.startDate;
                $scope.formattedDate = moment(date).format("MMM Do YYYY");
            }
        }

        $(function(){
            $('#agreeStatement').prop('checked', true);
            $('#agreeEmails').prop('checked', true);
        })
        


        activate();

        ////////////////

        function activate() {
            $scope.formatInvestment();
            $scope.passwordDisplay();
            $scope.formatDate();
        }
    }
})();