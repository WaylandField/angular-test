'use strict';

var module = angular.module('mydashApp');
module.directive('butterbar', ['$rootScope',function($rootScope){
    return {
	restrict: 'EA',
	link: function(scope, element, attrs, controller){
	    element.html('butterbar');
	    $rootScope.$on('$routeChangeStart', function(){
		element.html('started');
	    });
	    $rootScope.$on('$routeChangeSuccess', function(){
		element.html('ended');
	    });
	}
    };
}]);

module.directive('chart', function(){
    return {
	restrict: 'E',
	templateUrl: '../../views/chart.html',
	replace:true,
	link: function(scope, element, attrs, controller){
	    //element.html('this is the new chart');
	}
    };
});

module.directive('grid', function(){
    return {
	restrict: 'E',
	templateUrl: '../../views/grid.html',
	replace: true,
	link: function(scope, element, attrs, controller){
	    //element.html('this is the new grid');
	}
    };
});


module.directive('groupbox', function () {
    return {
        restrict: 'E',
        priority: 200,
        templateUrl: '../../views/groupbox.html',
        transclude: true,
        replace: true,
        scope: {title: '@'}
    };
});

module.directive('translate', ['$filter', function ($filter) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var e = $(element);
            var data = attrs.translate;
//            var results = $filter('I')(e.html(), data);
//            e.html(results.text);
//            if (results.tooltip) e.attr('data-tooltip', results.tooltip);
        }
    };
}]);
