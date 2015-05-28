angular.module('appDirectives', [])

	.directive('list', function($compile) {
		return {
			restrict: "E",
			template: '<ul class="main-menu"><sublist></sublist></ul>',
			compile: function(el) {
				var contents = el.contents().remove(),
					compiled;
				return function(scope, el) {
					if(!compiled)
						compiled = $compile(contents);
					compiled(scope, function(clone) {
						el.append(clone);
					});
				};
			}
		};
	})


	.directive('sublist', function() {
		return {
			restrict: 'E',
			template: '<li ng-repeat="item in item.menu" status=\"{{item.status}}\" route=\"{{item.route}}\" class="menu-item"><a href=\"#/{{item.path}}\" ng-class="{active: active==item.route}" ng-click="getElement(item); getActiveEl(item)">{{item.text}}</a><list ng-if="item.status == \'dropdown\'"></list></li>'
		};
	})

	.directive('discover', function() {
		return {
			controller: 'DiscoverCtrl',
			restrict: 'A',
			template: '<h1>{{info.index.title}}</h1>',
			link: function($scope, $element, $attrs, DiscoverCtrl) {
				
			}
		};
	})

	.directive('activity', function() {
		return {
			controller: 'ActivityCtrl',
			restrict: 'A',
			template: '<h1>{{info.index.title}}</h1>',
			link: function($scope, $element, $attrs, DiscoverCtrl) {
				
			}
		};
	})