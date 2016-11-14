(function(angular){

	'use strict';

	//定义一个模块
	angular.module('movieList.coming_soon', ['ngRoute'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/coming_soon', {
				templateUrl: 'coming_soon/view.html',
				controller: 'coming_soonController'
			});
		}])


		.controller('coming_soonController', ['$scope',function($scope) {
			$scope.title = "coming_soon";

		}]);


})(angular)
