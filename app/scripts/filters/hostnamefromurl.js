'use strict';

/**
 * @ngdoc filter
 * @name angNewsApp.filter:HostnameFromUrl
 * @function
 * @description
 * # HostnameFromUrl
 * Filter in the angNewsApp.
 */
app
  .filter('hostnameFromUrl', function () {
    return function (str) {
      var url = document.createElement('a');
      url.href = str;

      return url.hostname;
    };
  });
