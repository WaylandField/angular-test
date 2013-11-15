'use strict';

angular.module('mydashApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/d', {
        templateUrl: 'views/dynamic.html',
        controller: 'DynamicCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
