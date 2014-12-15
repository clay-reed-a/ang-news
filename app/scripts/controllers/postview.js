'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:PostviewCtrl
 * @description
 * # PostviewCtrl
 * Controller of the angNewsApp
 */
app
  .controller('PostViewCtrl', function ($scope, Auth, $routeParams, Post) {
    $scope.post = Post.get($routeParams.postId);
    $scope.comments = Post.comments($routeParams.postId);

    $scope.user = Auth.user;
    $scope.signedIn = Auth.signedIn;

    $scope.addComment = function () {
      if(!$scope.commentText || $scope.commentText === '') {
        return;
      }

      var comment = {
        text: $scope.commentText,
        creator: $scope.user.profile.username, 
        creatorUID: $scope.user.uid
      };

      $scope.comments.$add(comment);

      $scope.commentText = '';
    };

    $scope.deleteComment = function (comment) {
      $scope.comments.$remove(comment);
    };
  });
