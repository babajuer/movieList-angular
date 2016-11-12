(function (angular) {



	//定义一个模块
	angular.module('movieList.in_theaters', ['ngRoute'])

		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider.when('/in_theaters', {
				templateUrl: 'in_theaters/view.html',
				controller: 'in_theatersController'
			});
		}])


		.controller('in_theatersController', [
			'$scope',
			'$http',
			function ($scope, $http) {
				$scope.title = "in theater";
				$http
					.get('/movieList-fangself/app/data.json')
					.then((response) => {
						console.log("then:");
						console.log(response);
						$scope.movies = response.data;
					})
					.catch((err)=>{
						console.log("catch");
						console.log(err);
					});
				$scope.movies =[];

			}]);


})(angular)
