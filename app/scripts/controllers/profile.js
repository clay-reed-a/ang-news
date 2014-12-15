'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the angNewsApp
 */
app
  .controller('ProfileCtrl', function ($scope, $routeParams, Profile) {
    var uid = $routeParams.userId;
    $scope.profile = Profile.get(uid);

    Profile.getPosts(uid).then(function(posts) {
      $scope.posts = posts;
    });
  });
