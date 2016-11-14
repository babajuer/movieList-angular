(function (angular) {



	//定义一个模块
	angular.module('movieList.in_theaters', ['ngRoute', 'movieList.service.http'])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/in_theaters/:page?', {
				templateUrl: 'in_theaters/view.html',
				controller: 'in_theatersController'
			});
		}])


		.controller('in_theatersController', [
			'$scope',
			'$route',
			'$routeParams',
			'HttpService',
			function ($scope, $route, $routeParams, HttpService) {
				$scope.title = "";
				$scope.movies = [];
				$scope.loading = true;

				//console.log($routeParams);
				$scope.page = parseInt($routeParams.page || 1); //page是可选参数,  如果没有传参 默认就是1;
				var numPerPage = 5;
				var start = ($scope.page - 1) * numPerPage;

				/*//同域请求实例
				 $http
				 .get('/movieList-fangself/app/data.json')
				 .then((response) => {
				 console.log("同域请求 data.json:");
				 console.log(response);
				 $scope.movies = response.data;
				 })
				 .catch((err)=>{
				 console.log("catch");
				 console.log(err);
				 });
				 */


				//跨域jsonp
				//console.log(HttpService.jsonpFang);

				HttpService.jsonpFang(
					'http://api.douban.com/v2/movie/in_theaters',
					{
						start: start,
						count: numPerPage
					},
					function (data) {
						//console.log('跨域jsonpFang');
						console.log(data);
						//console.log(data.subjects);
						$scope.title = data.title;
						$scope.movies = data.subjects;
						$scope.totalCount = data.total;
						$scope.totalPage = Math.ceil(data.total / numPerPage);
						$scope.loading = false;
						$scope.$apply();

					}
				)


				//分页跳转 抽取到方法中。
				$scope.go = function (page) {
					if (page > 0 && page <= $scope.totalPage) {
						$route.updateParams({page: page});
					}

				}
			}]);


})(angular);
