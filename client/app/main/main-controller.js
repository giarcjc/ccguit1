angular.module('app')
  .controller('MainCtrl', ['$scope', function ($scope) {
    // here we define the items to be repeated in the template
    $scope.list1 = [
      {label: 'one'},
      {label: 'two'},
      {label: 'three'}
    ];
 
    $scope.list2 = [
		{ link: "https://www.youtube.com/watch?v=Ie1VIgCCrtA",
		  title: "Comin\'n Home Baby", 
		  groupname: "The Chris Craig Trio"
		}
		{ link: "https://www.youtube.com/watch?v=gDMaPLcn4r0",
		  title: "Samba Cantina", 
		  groupname: "The Chris Craig Trio"
		}
    ];
  }]);