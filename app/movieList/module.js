(function (angular) {



	//定义一个模块
	angular.module('movieList.movieList', ['ngRoute', 'movieList.service.http'])

		.config(['$routeProvider', function ($routeProvider) {
			//将in_theater  coming_soon 等也抽取成参数category。 合并模块
			$routeProvider.when('/:category/:page?', {
				templateUrl: 'movieList/view.html',
				controller: 'movieListController'
			});
		}])


		.controller('movieListController', [
			'$scope',
			'$route',
			'$routeParams',
			'HttpService',
			function ($scope, $route, $routeParams, HttpService) {
				$scope.title = "loading";
				$scope.movies = [];
				$scope.loading = true;

				console.log($routeParams);
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
				//豆瓣搜索格式:  /v2/movie/search?q=张艺谋
				HttpService.jsonpFang(
					'http://api.douban.com/v2/movie/'+$routeParams.category,
					{
						start: start,
						count: numPerPage,
						q:$routeParams.q
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
