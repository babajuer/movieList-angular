(function(angular){

	'use strict';

	//定义一个模块
	angular.module('movieList.in_theaters', ['ngRoute'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/in_theaters', {
				templateUrl: 'in_theaters/view.html',
				controller: 'in_theatersController'
			});
		}])


		.controller('in_theatersController', ['$scope',function($scope) {
			$scope.title = "in theater";

		}]);


})(angular)
