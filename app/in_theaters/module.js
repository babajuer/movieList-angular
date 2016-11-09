(function(angular){

	'use strict';
var temp = [
	{
		"rating": {
			"max": 10,
			"average": 8.1,
			"stars": "40",
			"min": 0
		},
		"genres": [
			"动作",
			"科幻",
			"奇幻"
		],
		"title": "奇异博士",
		"casts": [
			{
				"alt": "https://movie.douban.com/celebrity/1009405/",
				"avatars": {
					"small": "https://img3.doubanio.com/img/celebrity/small/41072.jpg",
					"large": "https://img3.doubanio.com/img/celebrity/large/41072.jpg",
					"medium": "https://img3.doubanio.com/img/celebrity/medium/41072.jpg"
				},
				"name": "本尼迪克特·康伯巴奇",
				"id": "1009405"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1025152/",
				"avatars": {
					"small": "https://img5.doubanio.com/img/celebrity/small/3546.jpg",
					"large": "https://img5.doubanio.com/img/celebrity/large/3546.jpg",
					"medium": "https://img5.doubanio.com/img/celebrity/medium/3546.jpg"
				},
				"name": "蒂尔达·斯文顿",
				"id": "1025152"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1040529/",
				"avatars": {
					"small": "https://img3.doubanio.com/img/celebrity/small/57893.jpg",
					"large": "https://img3.doubanio.com/img/celebrity/large/57893.jpg",
					"medium": "https://img3.doubanio.com/img/celebrity/medium/57893.jpg"
				},
				"name": "麦斯·米科尔森",
				"id": "1040529"
			}
		],
		"collect_count": 85589,
		"original_title": "Doctor Strange",
		"subtype": "movie",
		"directors": [
			{
				"alt": "https://movie.douban.com/celebrity/1320372/",
				"avatars": {
					"small": "https://img1.doubanio.com/img/celebrity/small/49077.jpg",
					"large": "https://img1.doubanio.com/img/celebrity/large/49077.jpg",
					"medium": "https://img1.doubanio.com/img/celebrity/medium/49077.jpg"
				},
				"name": "斯科特·德瑞克森",
				"id": "1320372"
			}
		],
		"year": "2016",
		"images": {
			"small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
			"large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
			"medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
		},
		"alt": "https://movie.douban.com/subject/3025375/",
		"id": "3025375"
	},
	{
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": [
			"剧情",
			"战争"
		],
		"title": "生死96小时",
		"casts": [
			{
				"alt": "https://movie.douban.com/celebrity/1275718/",
				"avatars": {
					"small": "https://img3.doubanio.com/img/celebrity/small/1357005509.65.jpg",
					"large": "https://img3.doubanio.com/img/celebrity/large/1357005509.65.jpg",
					"medium": "https://img3.doubanio.com/img/celebrity/medium/1357005509.65.jpg"
				},
				"name": "聂远",
				"id": "1275718"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1316732/",
				"avatars": {
					"small": "https://img1.doubanio.com/img/celebrity/small/44867.jpg",
					"large": "https://img1.doubanio.com/img/celebrity/large/44867.jpg",
					"medium": "https://img1.doubanio.com/img/celebrity/medium/44867.jpg"
				},
				"name": "叶一云",
				"id": "1316732"
			}
		],
		"collect_count": 68,
		"original_title": "生死96小时",
		"subtype": "movie",
		"directors": [
			{
				"alt": "https://movie.douban.com/celebrity/1364239/",
				"avatars": {
					"small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
					"large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
					"medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
				},
				"name": "苑本立",
				"id": "1364239"
			}
		],
		"year": "2016",
		"images": {
			"small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2394588225.jpg",
			"large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2394588225.jpg",
			"medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2394588225.jpg"
		},
		"alt": "https://movie.douban.com/subject/26904701/",
		"id": "26904701"
	},
	{
		"rating": {
			"max": 10,
			"average": 0,
			"stars": "00",
			"min": 0
		},
		"genres": [
			"剧情",
			"喜剧",
			"爱情"
		],
		"title": "减法人生",
		"casts": [
			{
				"alt": "https://movie.douban.com/celebrity/1314064/",
				"avatars": {
					"small": "https://img3.doubanio.com/img/celebrity/small/1410099101.0.jpg",
					"large": "https://img3.doubanio.com/img/celebrity/large/1410099101.0.jpg",
					"medium": "https://img3.doubanio.com/img/celebrity/medium/1410099101.0.jpg"
				},
				"name": "魏大勋",
				"id": "1314064"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1319376/",
				"avatars": {
					"small": "https://img3.doubanio.com/img/celebrity/small/1433145556.71.jpg",
					"large": "https://img3.doubanio.com/img/celebrity/large/1433145556.71.jpg",
					"medium": "https://img3.doubanio.com/img/celebrity/medium/1433145556.71.jpg"
				},
				"name": "徐璐",
				"id": "1319376"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1364419/",
				"avatars": {
					"small": "https://img5.doubanio.com/img/celebrity/small/1478503034.56.jpg",
					"large": "https://img5.doubanio.com/img/celebrity/large/1478503034.56.jpg",
					"medium": "https://img5.doubanio.com/img/celebrity/medium/1478503034.56.jpg"
				},
				"name": "毛川",
				"id": "1364419"
			}
		],
		"collect_count": 46,
		"original_title": "减法人生",
		"subtype": "movie",
		"directors": [
			{
				"alt": "https://movie.douban.com/celebrity/1336918/",
				"avatars": {
					"small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
					"large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
					"medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
				},
				"name": "黄燕",
				"id": "1336918"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1364418/",
				"avatars": {
					"small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
					"large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
					"medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
				},
				"name": "马林",
				"id": "1364418"
			}
		],
		"year": "2016",
		"images": {
			"small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2394035574.jpg",
			"large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2394035574.jpg",
			"medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2394035574.jpg"
		},
		"alt": "https://movie.douban.com/subject/26629328/",
		"id": "26629328"
	},
	{
		"rating": {
			"max": 10,
			"average": 8.4,
			"stars": "45",
			"min": 0
		},
		"genres": [
			"剧情",
			"喜剧"
		],
		"title": "驴得水",
		"casts": [
			{
				"alt": "https://movie.douban.com/celebrity/1362973/",
				"avatars": {
					"small": "https://img1.doubanio.com/img/celebrity/small/1478066140.77.jpg",
					"large": "https://img1.doubanio.com/img/celebrity/large/1478066140.77.jpg",
					"medium": "https://img1.doubanio.com/img/celebrity/medium/1478066140.77.jpg"
				},
				"name": "任素汐",
				"id": "1362973"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1355797/",
				"avatars": {
					"small": "https://img1.doubanio.com/img/celebrity/small/1458442004.38.jpg",
					"large": "https://img1.doubanio.com/img/celebrity/large/1458442004.38.jpg",
					"medium": "https://img1.doubanio.com/img/celebrity/medium/1458442004.38.jpg"
				},
				"name": "大力",
				"id": "1355797"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1337891/",
				"avatars": {
					"small": "https://img1.doubanio.com/img/celebrity/small/1392696207.67.jpg",
					"large": "https://img1.doubanio.com/img/celebrity/large/1392696207.67.jpg",
					"medium": "https://img1.doubanio.com/img/celebrity/medium/1392696207.67.jpg"
				},
				"name": "刘帅良",
				"id": "1337891"
			}
		],
		"collect_count": 72863,
		"original_title": "驴得水",
		"subtype": "movie",
		"directors": [
			{
				"alt": "https://movie.douban.com/celebrity/1362256/",
				"avatars": {
					"small": "https://img3.doubanio.com/img/celebrity/small/1477663977.75.jpg",
					"large": "https://img3.doubanio.com/img/celebrity/large/1477663977.75.jpg",
					"medium": "https://img3.doubanio.com/img/celebrity/medium/1477663977.75.jpg"
				},
				"name": "周申",
				"id": "1362256"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1362257/",
				"avatars": {
					"small": "https://img1.doubanio.com/img/celebrity/small/1477663883.18.jpg",
					"large": "https://img1.doubanio.com/img/celebrity/large/1477663883.18.jpg",
					"medium": "https://img1.doubanio.com/img/celebrity/medium/1477663883.18.jpg"
				},
				"name": "刘露",
				"id": "1362257"
			}
		],
		"year": "2016",
		"images": {
			"small": "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2393044761.jpg",
			"large": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2393044761.jpg",
			"medium": "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p2393044761.jpg"
		},
		"alt": "https://movie.douban.com/subject/25921812/",
		"id": "25921812"
	},
	{
		"rating": {
			"max": 10,
			"average": 6.2,
			"stars": "35",
			"min": 0
		},
		"genres": [
			"剧情",
			"喜剧",
			"动作"
		],
		"title": "邻家大贱谍",
		"casts": [
			{
				"alt": "https://movie.douban.com/celebrity/1044996/",
				"avatars": {
					"small": "https://img3.doubanio.com/img/celebrity/small/8710.jpg",
					"large": "https://img3.doubanio.com/img/celebrity/large/8710.jpg",
					"medium": "https://img3.doubanio.com/img/celebrity/medium/8710.jpg"
				},
				"name": "盖尔·加朵",
				"id": "1044996"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1041001/",
				"avatars": {
					"small": "https://img1.doubanio.com/img/celebrity/small/437.jpg",
					"large": "https://img1.doubanio.com/img/celebrity/large/437.jpg",
					"medium": "https://img1.doubanio.com/img/celebrity/medium/437.jpg"
				},
				"name": "艾拉·菲舍尔",
				"id": "1041001"
			},
			{
				"alt": "https://movie.douban.com/celebrity/1027137/",
				"avatars": {
					"small": "https://img1.doubanio.com/img/celebrity/small/1197.jpg",
					"large": "https://img1.doubanio.com/img/celebrity/large/1197.jpg",
					"medium": "https://img1.doubanio.com/img/celebrity/medium/1197.jpg"
				},
				"name": "扎克·加利凡纳基斯",
				"id": "1027137"
			}
		],
		"collect_count": 1144,
		"original_title": "Keeping Up with the Joneses",
		"subtype": "movie",
		"directors": [
			{
				"alt": "https://movie.douban.com/celebrity/1274466/",
				"avatars": {
					"small": "https://img5.doubanio.com/img/celebrity/small/4286.jpg",
					"large": "https://img5.doubanio.com/img/celebrity/large/4286.jpg",
					"medium": "https://img5.doubanio.com/img/celebrity/medium/4286.jpg"
				},
				"name": "格雷格·莫托拉",
				"id": "1274466"
			}
		],
		"year": "2016",
		"images": {
			"small": "https://img1.doubanio.com/view/movie_poster_cover/ipst/public/p2394353738.jpg",
			"large": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2394353738.jpg",
			"medium": "https://img1.doubanio.com/view/movie_poster_cover/spst/public/p2394353738.jpg"
		},
		"alt": "https://movie.douban.com/subject/25847558/",
		"id": "25847558"
	}
];


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
			$scope.movies = temp;

		}]);


})(angular)
