'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angNewsApp
 */
app
  .controller('PostsCtrl', function ($scope, Post, $location) {
    $scope.posts = Post.all;
    var emptyPost = {url: 'http://', title: ''}
    $scope.post = emptyPost;

    $scope.deletePost = function (post) {
      Post.delete(post);
    };


  });
