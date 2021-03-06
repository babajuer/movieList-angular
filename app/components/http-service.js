(function (angular) {

	//定义一个模块
	angular.module('movieList.service.http', [])

		.service('HttpService', ['$window', function ($window) {

			this.jsonpFang = function crossDomain(url, params, fn) {
				// 0. 处理回调函数挂载问题(不能覆盖)
				var cbName = `jsonp_${(Math.random()*Math.random()).toString().substr(2)}`;
				// console.log(cbName);
				/*
				 window也是一个对象。所以可以用[]存取对象里的属性。一般属性名不是固定的时候用[]获取.例如：
				 var Name = 'foo';
				 window[Name] 等于 window.foo
				 */
				$window[cbName] = function (data) {
					fn(data);
					// 不断创建标签，最终可能太多，可以在这个脚本执行完成过后移除
					//
					$window.document.body.removeChild(scriptElement);
				};


				// 1. 组合最终请求的url地址
				// 将params转换为 {key1:val, key2:val} => key1=val&key2=val
				var querystring = '';
				for (var key in params) {
					querystring += `${key}=${params[key]}&`;
				}
				// 告诉服务端我的回调叫什么
				querystring += `callback=${cbName}`;
				url = `${url}?${querystring}`;


				// 2. 创建一个script标签，并将src设置为url地址
				var scriptElement = $window.document.createElement('script');
				scriptElement.src = url;


				// 3. appendChild(执行)
				$window.document.body.appendChild(scriptElement);
			}
		}]);




})(angular);
