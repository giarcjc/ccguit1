angular.module('app')
  .config(['$stateProvider', function ($stateProvider) {
    'use strict';
 
	$stateProvider.state('repertoire', { // this is a name for our route
      url: '/', // the actual url path of the route
      templateUrl: 'app/repertoire/repertoire.html', // the template that will load
      controller: 'RepertoireCtrl' // the name of the controller to use
    });


    
  }]);