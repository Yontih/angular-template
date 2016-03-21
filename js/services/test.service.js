angular.module('test.service', [])
    .factory('testService', ['$rootScope', '$http', '$q',
        function ($rootScope, $http, $q) {
            'use strict';

            function test() {
                return 'test';
            }


            return {
                test: test
            };
        }]);