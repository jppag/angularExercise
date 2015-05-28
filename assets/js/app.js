var app = angular.module('App', ['ngRoute','appService', 'appDirectives', 'routeResolverServices']);


app.controller('AppCtrl', ['$rootScope','$scope', 'AppService', '$routeParams', '$location', function($rootScope, $scope, AppService, $routeParams, $location) {
	var promise = AppService.getMenu();
	promise.then(function(data) {
		$rootScope.item = data.data;
		menu = $rootScope.item.menu;
		slug = $routeParams.path;
		$scope.active = false;
	});
	$scope.getElement = function(element) {
		// console.log('CLICK: element.path: ' + element.path + ' scope.active: ' + $scope.active);
		$scope.active = element.path;
		// console.log('AFTER CLICK: element.path: ' + element.path + ' scope.active: ' + $scope.active);
	};
	// $scope.getActiveEl = function(item) {
	// 	console.log(item.parent());
	// }
}])


// .controller('InternalCtrl', ['$rootScope', '$scope', 'DiscoverService', function($rootScope, $scope, DiscoverService) {
// 	var promise = DiscoverService.getDiscover();
// 	promise.then(function(info) {
// 		$scope.info = info.data;
// 		console.log($scope.info);
// 	})
// }])

.controller('DiscoverCtrl', ['$rootScope', '$scope', 'DiscoverService', function($rootScope, $scope, DiscoverService) {
	var promise = DiscoverService.getDiscover();
	promise.then(function(info) {
		$scope.info = info.data;
	})

}])

.controller('ActivityCtrl', ['$rootScope', '$scope', 'ActivityService', function($rootScope, $scope, ActivityService) {
	var promise = ActivityService.getActivity();
	promise.then(function(info) {
		$scope.info = info.data;
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
		.when('/welcome', {
			templateUrl: 'welcome.html',
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

