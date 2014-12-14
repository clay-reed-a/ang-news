'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angNewsApp
 */
app
  .controller('PostsCtrl', function ($scope, Post) {
    $scope.posts = Post.all;
    var emptyPost = {url: 'http://', title: ''}
    $scope.post = emptyPost;

    $scope.submitPost = function() {
      Post.create($scope.post).then(function () {
        $scope.post = emptyPost;
      });
    };

    $scope.deletePost = function (post) {
      Post.delete(post);
    };
  });
