'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angNewsApp
 */
app
  .controller('PostsCtrl', function ($scope, Post, $location, Auth) {


    $scope.posts = Post.all;
    console.log($scope.posts);
    var emptyPost = {url: 'http://', title: ''}
    $scope.post = emptyPost;

    $scope.user = Auth.user; 

    $scope.deletePost = function (post) {
      Post.delete(post);
    };


  });
