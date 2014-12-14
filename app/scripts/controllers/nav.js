'use strict';

/**
 * @ngdoc function
 * @name angNewsApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the angNewsApp
 */
app
  .controller('NavCtrl', function ($scope) {
    var emptyPost = {url: 'http://', title: ''};
    $scope.post = emptyPost;

    $scope.submitPost = function() {
      Post.create($scope.post).then(function(ref) {
        $location.path('/posts/' + ref.name());
        $scope.post = emptyPost;
      });
    };
  });
