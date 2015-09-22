angular.module('myApp.services', ['ngResource'])
	.factory('UserService', ['$resource',
		function($resource) {

			return $resource('/api/users/:id',
				{
					id: '@id'
				},
				{
					update: {
						method: "PUT",
						url: "api/users/:id"
					}
				}
			)
		}
	]);