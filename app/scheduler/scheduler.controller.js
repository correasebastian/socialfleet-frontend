(function() {
    'use strict';

    angular
        .module('app')
        .controller('SchedulerController', SchedulerController);

    SchedulerController.$inject = ['$http'];

    /* @ngInject */
    function SchedulerController($http) {
        var vm = this;
        vm.opened = false;
        vm.open = open;
        vm.tweet = tweet;
        vm.message = '';
        vm.title = 'SchedulerController';
        vm.minDate = new Date();
        vm.time = new Date();
        vm.date = null;

        activate();

        ////////////////

        function activate() {
            getMyPosts();


        }

        function open(e) {
            vm.opened = !vm.opened;
        }

        function tweet(argument) {
            var data = {
                message: vm.message,
                datetime: getDateTime()
            };
            $http.post('/api/post/tweet', data)
                .then(function() {
                    console.log('post');
                });
        }

        function getDateTime() {
            var dt = vm.date;
            var tm = vm.time;
            var datetime = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), tm.getHours(), tm.getMinutes());
            return datetime;
        }

        function getMyPosts() {
            $http.get('/api/post/myPosts')
                .then(function(posts) {
                    vm.posts = posts.data;
                });
        }

    }
})();
