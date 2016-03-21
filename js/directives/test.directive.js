angular.module('test.directive', [])
    .directive('test', function () {

        function link(scope, el, attr) {
            el.text('test');
        }

        return {
            restrict: 'E',
            link: link
        };
    });