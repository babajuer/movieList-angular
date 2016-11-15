(function (angular) {

	//定义一个模块
	angular.module('movieList.movieDetail', ['ngRoute', 'movieList.service.http'])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/subject/:movieId', {
				templateUrl: 'movieDetail/view.html',
				controller: 'movieDetailController'
			});
		}])

		.controller('movieDetailController', [
			'$scope',
			'$route',
			'$routeParams',
			'HttpService',
			function ($scope, $route, $routeParams, HttpService) {
				$scope.title = "loading";
				$scope.movies = {};
				$scope.loading = true;
				//console.log($routeParams);

				HttpService.jsonpFang(
					'http://api.douban.com/v2/movie/subject/'+$routeParams.movieId,
					{},
					function (data) {
						console.log(data);
						$scope.movie = data;
						$scope.title = data.title;
						$scope.loading = false;
						$scope.$apply();

					}
				)
			}]);


})(angular);
