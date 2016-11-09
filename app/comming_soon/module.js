(function(angular){

	'use strict';

	//定义一个模块
	angular.module('movieList.comming_soon', ['ngRoute'])

		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/comming_soon', {
				templateUrl: 'comming_soon/view.html',
				controller: 'comming_soonController'
			});
		}])


		.controller('comming_soonController', ['$scope',function($scope) {
			$scope.title = "comming_soon";

		}]);


})(angular)
