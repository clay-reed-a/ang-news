'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angNewsApp
 */
angular.module('angNewsApp')
  .controller('PostsCtrl', function ($scope) {
    $scope.posts = [];
    $scope.post = {url: 'http://', title: ''};

    $scope.submitPost = function() {
      $scope.posts.push($scope.post);
      $scope.post = {url: 'http://', title: ''};
    };
  });
