'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the angNewsApp
 */
app
  .controller('NavCtrl', function ($scope, $location, Auth, Post) {
    var emptyPost = {url: 'http://', title: ''};
    $scope.post = emptyPost;

    $scope.signedIn = Auth.signedIn;
    $scope.logout = Auth.logout;

    $scope.user = Auth.user;

    $scope.submitPost = function() {
      $scope.post = emptyPost;
      $scope.post.creator = $scope.user.profile.username;
      $scope.post.creatorUID = $scope.user.uid; 
      Post.create($scope.post).then(function(ref) {

        $location.path('/posts/' + ref.name());
        
      });
    };
  });
