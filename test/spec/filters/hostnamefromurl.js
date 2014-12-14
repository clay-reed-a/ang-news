'use strict';

describe('Filter: HostnameFromUrl', function () {

  // load the filter's module
  beforeEach(module('angNewsApp'));

  // initialize a new instance of the filter before each test
  var HostnameFromUrl;
  beforeEach(inject(function ($filter) {
    HostnameFromUrl = $filter('HostnameFromUrl');
  }));

  it('should return the input prefixed with "HostnameFromUrl filter:"', function () {
    var text = 'angularjs';
    expect(HostnameFromUrl(text)).toBe('HostnameFromUrl filter: ' + text);
  });

});
