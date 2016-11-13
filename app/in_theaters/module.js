(function (angular) {



	//定义一个模块
	angular.module('movieList.in_theaters', ['ngRoute','movieList.service.http'])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/in_theaters', {
				templateUrl: 'in_theaters/view.html',
				controller: 'in_theatersController'
			});
		}])


		.controller('in_theatersController', [
			'$scope',
			'HttpService',
			function ($scope, HttpService) {
				$scope.title = "in theater";
				$scope.movies =[];

/*				//同域请求实例
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
						start: 1,
						count: 10
					},
					function(data) {
						//console.log('跨域jsonpFang');
						//console.log(data);
						//console.log(data.subjects);

						$scope.title = data.title;
						$scope.movies = data.subjects;

						$scope.$apply();

					}
				)


			}]);


})(angular)
