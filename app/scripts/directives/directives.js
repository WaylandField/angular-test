'use strict';

var module = angular.module('mydashApp');
module.directive('butterbar', ['$rootScope',function($rootScope){
    return {
	restrict: 'EA',
	link: function(scope, element, attrs, controller){
	    alert('butterbar');
	    element.hide();
	    $rootScope.$on('$routeChangeStart', function(){
		alert('started');
	    });
	    $rootScope.$on('$routeChangeSuccess', function(){
		alert('Succeed');
	    });
	}
    };
}]);

module.directive('chart', function(){
    return {
	restrict: 'E',
	templateUrl: '../../views/chart.html',
	link: function(scope, element, attrs, controller){
	    alert('chart');
	}
    };
});

module.directive('grid', function(){
    return {
	restrict: 'E',
	templateUrl: '../../views/grid.html',
	link: function(scope, element, attrs, controller){
	    alert('grid');
	}
    };
});



