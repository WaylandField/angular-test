'use strict';

angular.module('mydashApp.directives', []).
directive('datalist', function(){
    return {
	restrict: 'EA',
//	template: 'testtesttest',
	templateUrl: '../../views/comps/datalist.html',
	compile: function(scope, element, attrs){
	    console.log('direct');
	}
    };
});0