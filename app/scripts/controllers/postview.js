'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostviewCtrl
 * @description
 * # PostviewCtrl
 * Controller of the angNewsApp
 */
app
  .controller('PostViewCtrl', function ($scope, $routeParams, Post) {
    $scope.post = Post.get($routeParams.postId);
  });
