(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$auth', '$http'];

    /* @ngInject */
    function LoginController($auth, $http) {
        var vm = this;
        vm.title = 'LoginController';
        vm.message = '';
        vm.login = login;
        vm.tweet = tweet;
        vm.isAuthenticated = $auth.isAuthenticated;
        vm.logout = logout;
        activate();

        ////////////////

        function activate() {}

        function login() {
            $auth.authenticate('twitter');
        }

        function tweet(argument) {

            var data = {
                message: vm.message
            }
            $http.post('/api/post/tweet', data)
                .then(function() {
                    console.log('post');
                });
        }

        function logout() {
            alert('logginf out');
            $auth.logout();
        }
    }
})();
