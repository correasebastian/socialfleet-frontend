(function() {
    'use strict';

    angular
        .module('app')
        .config(Config);

    Config.$inject = ['$authProvider'];

    /* @ngInject */
    function Config($authProvider) {
        $authProvider.twitter({
            url: '/api/user/login'
        });
    }
})();
