angular.module('appService', [])

	.service('AppService', ['$http', '$q', function($http, $q) {
		var deferred = $q.defer();
		$http.get('./api/menu/data.json').then(function(data) {
			deferred.resolve(data);
		});
		this.getMenu = function() {
			// console.log('jp');
			return deferred.promise;
		}
	}])
	.service('DiscoverService', ['$http', '$q', function($http, $q) {
		var deferred = $q.defer();
		$http.get('./api/discover/data.json').then(function(data) {
			deferred.resolve(data);
		});
		this.getDiscover = function() {
			// console.log('jp');
			return deferred.promise;
		}
	}])
	.service('ActivityService', ['$http', '$q', function($http, $q) {
		var deferred = $q.defer();
		$http.get('./api/activity/data.json').then(function(data) {
			deferred.resolve(data);
		});
		this.getActivity = function() {
			// console.log('jp');
			return deferred.promise;
		}
	}])