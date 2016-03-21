var app = angular.module('AppName', [
    'ngRoute',
    //services
    'test.service',
    //directives
    'test.directive'
]);


app.config(['$routeProvider',
    function ($routeProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                templateUrl: 'partials/views/downloadsView.html',
                controller: 'IndexCtrl'
            })
            .when('/route1', {
                templateUrl: 'partials/views/downloadsView.html',
                controller: 'IndexCtrl'
            })
            .when('/route2', {
                templateUrl: 'partials/views/historyView.html',
                controller: 'IndexCtrl'
            });
    }]);