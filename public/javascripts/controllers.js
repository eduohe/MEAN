angular.module('myApp.controllers', ['myApp.services'])
	.controller('UserController',
		['$scope', 'UserService', '$routeParams', '$location',
		function($scope, UserService, $routeParams, $location) {

			$scope.load = function() {
				$scope.users = UserService.query();
			};

			$scope.get = function() {
				$scope.user = UserService.get({id: $routeParams.id});
			};

			$scope.edit = function(user) {
				$scope.result = UserService.update(
					{id: $routeParams.id},
					user,
					function(data, status, headers, config) {
						$location.path("/");
					});
			};

			$scope.create = function(user) {
				$scope.result = UserService.save(
					{},
					user,
					function(data, status, headers, config) {
						$location.path("/");
					});
			};

			$scope.delete = function(id) {
				if (confirm("Are you sure?")) {
					$scope.result = UserService.remove(
						{id: id},
						{},
						function(data, status, headers, config) {
							$location.path("/");
						});
				}
			};

		}]
	);