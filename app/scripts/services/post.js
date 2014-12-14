'use strict';

/**
 * @ngdoc service
 * @name angNewsApp.post
 * @description
 * # post
 * Service in the angNewsApp.
 */
app
  .service('Post', function ($resource) {
    return $resource('https://shining-heat-6416.firebaseio.com/posts/:id.json');
  });
