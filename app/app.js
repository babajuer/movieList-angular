(function (angular) {


	'use strict';

	//主模块

	angular.module('movieList', [
		'ngRoute',
		//'movieList.in_theaters',
		//'movieList.coming_soon',
		'movieList.movieList',
		'movieList.directives.auto-active',

	])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.otherwise({redirectTo: '/in_theaters'});
		}])


		.controller('SearchController',['$scope','$route', function($scope,$route){
			$scope.search = function(){
				//console.log($scope.searchKey);
				$route.updateParams({category: 'search',q:$scope.searchKey});
			}
		}]);


})(angular)
