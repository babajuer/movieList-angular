/**
 * 创建一个指令  左侧导航栏选中之后 自动添加为active状态
 */

(function (angular) {

	//定义一个模块
	angular.module('movieList.directives.auto-active', [])

	//指令命名要用驼峰命名法,在html页面中 使用 auto-active 的写法
		.directive('autoActive', ['$location', function ($location) {
			return {
				//当这个指令作用于某个元素过后 触发一次  只一次!!!
				link: function(scope,element,attributes){
					var url = $location.url();  //  得到类似 /in_theaters/2 的字符串
					var aLink = element.children().attr('href').substr(1);
					console.log(aLink);
					console.log("---:"+url);

					//判断url 是哪个href开头的。 就将其添加为active.
					//用字符串的 String.prototype.startsWith() 方法。ES6 规范, 可以使用MDN上的polyfill 解决兼容性问题
					console.log(url.startsWith(aLink));


					scope.$loc = $location;
					scope.$watch('$loc.url()', function(now,old){

						if (now.startsWith(aLink)){
							console.log(attributes); //可以通过attributes.autoActive获取属性值

							//干掉兄弟节点的active
							//element.parent().children().removeClass('active');
							element.parent().children().removeClass(attributes.autoActive);

							//添加当前元素
							//element.addClass('active');
							element.addClass(attributes.autoActive);

						}
					})


				}
			}
		}]);


})(angular);
