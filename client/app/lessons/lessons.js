angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
 
    $stateProvider.state('lessons', {
      url: '/lessons',
      templateUrl: 'app/lessons/lessons.html'
    });
  }]);