
## 1:用的是汪磊的angular模板

命令行:
		
	git clone https://github.com/zce/angular-boilerplate.git movieList-fangself --depth 1

-	todomvc-fang 是目的地文件名
-	-b 是要克隆哪个分支
-	--depth 不复制老项目之前的提交记录

克隆好模板之后, 里面的.git文件夹可以删除掉。

## 2: npm install 安装项目依赖

## 3: npm start

## view1 和 2 是模板, 根据模板改相应模块。
	
   主页中 引入angular.js 和 angular-route.js文件。 添加ng-view

## in theater 模块
js 要包一个自执行函数。 为什么???


## 将bootstrap模板 揉进来 这里用的是bower安装

	bower install bootstrap --save

直接将bs官网上面的控制台的模板  右键查看源代码 copy下来 以及css的内容copy下来
去豆瓣拿假数据, 先将结构撑起来. 

	https://api.douban.com/v2/movie/in_theaters?count=5

## 假数据对象数组, 如何深入遍历 可以用多层嵌套的 ng-repeat。 
 
 	<span ng-repeat="c in movie.casts">{{c.name}}{{$last?'':'、'}}

每个repeat的元素, $scope上都有其他一些属性,  如 $index, $first, $last,$middle, $even, $odd等

## 将假数据放入data.json文件,  做同域的数据请求。 注入$http服务。

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

## 跨域问题 
实质是通过script标签来实现跨域访问。 
在crossdomain文件夹里单独做跨域的测试。 封装跨域方法。 查看 demo2.html

### http-service.js中
将crossDomain1.js中的跨域方法 整合到服务模块中。 
angular中尽量使用angular的对象,  所以要替换掉crossDomain1方法中的window 和document.

	window => $window
	document => $window.document 

别忘记注入对象。
	
	.service('HttpService', ['$window','$document', function ($window,$document) {

### 应用到in_theaters/module.js中
添加服务模块依赖
用自定义的HttpService服务, 替换掉之前的$http服务

	angular.module('movieList.in_theaters', ['ngRoute','movieList.service.http'])

		.controller('in_theatersController', [
			'$scope',
			'HttpService',
			function ($scope, HttpService) {

index.html 中不要忘记添加


### 加载中动画   css loading   http://tobiasahlin.com/spinkit/

### 分页

配置路由的时候 加上page占位符  /in_theaters/:page?
:代表占位符
?代表可选参数
		
		angular.module('movieList.in_theaters', ['ngRoute', 'movieList.service.http'])    
    		.config(['$routeProvider', function ($routeProvider) {
    			$routeProvider.when('/in_theaters/:page?', {


注入$routeParams 来使用

		$scope.page = parseInt($routeParams.page || 1); //page是可选参数,  如果没有传参 默认就是1;

### 将分页跳转 抽取到方法中。
注入$route    使用 updateParams 方法 更新地址参数

	$scope.go = function (page) {
        if (page > 0 && page <= $scope.totalPage) {
            $route.updateParams({page: page});
        }

    }


### 创建一个指令 使左侧导航栏选中之后 自动添加为active状态
详见 auto-active.js

	
