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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
