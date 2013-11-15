'use strict';

angular.module('mydashApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('mydashApp')
  .controller('DynamicCtrl', function ($scope) {
      $scope.data = {chart: "this is a chart"};
      $scope.layout = [
	  [{span:4, offset:1, viewType:'chart', data: $scope.data.chart}],
	  [{span:4, offset:1, viewType:'grid', rows:[
	      [{span:4, offset:1, viewType:'chart', data: $scope.data.chart}],
	      [{span:4, offset:1, viewType:'grid', rows:[
		  [{span:4, offset:1, viewType:'chart', data: $scope.data.chart}],
		  [{span:3, offset:1, viewType:'butterbar'}]
	      ]}],
	      [{span:3, offset:1, viewType:'butterbar'}]
	  ]}],
	  [{span:3, offset:1, viewType:'butterbar'}]
      ];
  });