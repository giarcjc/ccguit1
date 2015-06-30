angular.module('app')
 
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
    $stateProvider.state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html'
    });
  }]);

