(function() {
    'use strict';

    angular
        .module('app')
        .controller('MyPostsController', MyPostsController);

    MyPostsController.$inject = ['$http'];

    /* @ngInject */
    function MyPostsController($http) {
        var vm = this;
        vm.title = 'MyPostsController';
        vm.posts=[];

        activate();

        ////////////////

        function activate() {
        	getMyPosts();
        }

          function getMyPosts() {
            $http.get('/api/post/myPosts')
                .then(function(posts) {
                    vm.posts = posts.data;
                });
        }
    }
})();