(function (angular) {


	'use strict';

	//主模块

	angular.module('movieList', [
		'ngRoute',
		'movieList.in_theaters',
		'movieList.comming_soon',

	])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.otherwise({redirectTo: '/in_theaters'});
		}]);


})(angular)
