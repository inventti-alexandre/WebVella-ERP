/* some-name.filter.js */

/**
* @desc just a sample filter code
*/
(function () {
    'use strict';

    angular
        .module('app')
        .filter('someNameFilter', filter);

    filter.$inject = [];
    
            function filter() {
                //Your code
                return filterFilter;

                ////////////////
                function filterFilter(parameters) {
                    return parameters;
                };
            }    

})();