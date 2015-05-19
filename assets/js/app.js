var app = angular.module('App', ['ngRoute','appService', 'appDirectives']);


app.controller('AppCtrl', ['$rootScope','$scope', 'AppService', '$routeParams', function($rootScope, $scope, AppService, $routeParams) {
	var promise = AppService.getMenu();
	promise.then(function(data) {
		$rootScope.item = data.data;
		menu = $rootScope.item.menu;
		slug = $routeParams.path;
	});
	
}])

.controller('InternalCtrl', ['$rootScope', '$scope', 'DiscoverService', function($rootScope, $scope, DiscoverService) {
	var promise = DiscoverService.getDiscover();
	promise.then(function(info) {
		$scope.info = info.data;
		console.log($scope.info);
	})
	$rootScope.select = function(item) {
		$rootScope.selected = item;
	}
}])

.controller('DiscoverCtrl', ['$rootScope', '$scope', 'DiscoverService', function($rootScope, $scope, DiscoverService) {
	var promise = DiscoverService.getDiscover();
	promise.then(function(info) {
		$scope.info = info.data;
		// console.log($scope.info);
	})
}])

.controller('ActivityCtrl', ['$rootScope', '$scope', 'ActivityService', function($rootScope, $scope, ActivityService) {
	var promise = ActivityService.getActivity();
	promise.then(function(info) {
		$scope.info = info.data;
		console.log($scope.info);
	})
}])


.config(function($routeProvider, $locationProvider) 
{
	// console.log($routeProvider);
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'AppCtrl'
		})
		// .when('/:slug', {
		// 	templateUrl: 'inner.html',
		// 	controller: 'InternalCtrl'
		// })
		.when('/discover', {
			templateUrl: 'discover.html',
			controller: 'DiscoverCtrl'
		})
		.when('/activity', {
			templateUrl: 'activity.html',
			controller: 'ActivityCtrl'
		})
		// .when('/playlist/:slug', {
		// 	templateUrl: 'inner.html',
		// 	controller: 'InternalCtrl'
		// })
		// .when('/friends/:slug', {
		// 	templateUrl: 'inner.html',
		// 	controller: 'InternalCtrl'
		// })
		.otherwise({
			redirectTo: '/'
		});
	// $locationProvider.html5mode(true);
});

