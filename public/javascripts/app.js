angular.module('myApp',['ngRoute', 'myApp.controllers'])
	.config(
		['$routeProvider', '$locationProvider', 
		function($routeProvider, $location) {

			$routeProvider
				.when("/", {
					templateUrl: '/angular/users/index'
				})
				.when("/edit/:id", {
					templateUrl: '/angular/users/edit'
				})
				.when("/create", {
					templateUrl: '/angular/users/create'
				});
			//$location.html5mode(true);
		}]
	);