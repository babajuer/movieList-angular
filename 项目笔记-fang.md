
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
	
	主页中 引入angular.js 和 angular-route.js文件
	添加ng-view

## in theater 模块
js 要包一个自执行函数。 为什么???


## 将bootstrap模板 揉进来 这里用的是bower安装

bower install bootstrap --save

直接将bs官网上面的控制台的模板  右键查看源代码 copy下来 以及css的内容copy下来

##  对象数组遍历  用ng-repeat。 
 
<span ng-repeat="c in movie.casts">{{c.name}}{{$last?'':'、'}}
每个repeat的元素, $scope上都有其他一些属性,  如 $index, $first, $last,$middle, $even, $odd等
