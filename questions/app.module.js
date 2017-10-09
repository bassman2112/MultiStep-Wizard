(function() {
    'use strict';

    // Creating our angular app and inject ui-router 
    // =============================================================================
    var app = angular.module('wizardApp', ['ui.router'])

    // Configuring our states 
    // =============================================================================
    app.config(['$stateProvider', '$urlRouterProvider',

        function($stateProvider, $urlRouterProvider) {

            // For any unmatched url, redirect to /form/personal
            $urlRouterProvider.otherwise('/form/personal');
    
            $stateProvider
                // PARENT STATE: form state
                .state('form', {
                    url: '/form',
                    templateUrl: 'questions/form/form.html',
                    controller: 'FormController'
                })
        
                // NESTED STATES: child states of 'form' state 
                // URL will become '/form/personal'
                .state('form.personal', {
                    url: '/personal',
                    templateUrl: 'questions/personal/personal.html',
                    controller: 'PersonalController',
                    controllerAs: 'vm'
                })
        
                // URL will become '/form/finances'
                .state('form.finances', {
                    url: '/finances',
                    templateUrl: 'questions/finances/finances.html',
                    controller: 'FinancesController',
                    controllerAs: 'vm'
                })
        
                // URL will become '/form/company'
                .state('form.company', {
                    url: '/company',
                    templateUrl: 'questions/company/company.html',
                    controller: 'CompanyController',
                    controllerAs: 'vm'
                })

                // URL will become '/form/result'
                .state('form.result', {
                    url: '/result',
                    templateUrl: 'questions/result/result.html',
                    controller: 'ResultController',
                    controllerAs: 'vm'
                })
        }
    ]);
       
})();
