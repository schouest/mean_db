var my_App = angular.module('my_App', ['ngRoute','ui.materialize']);

my_App.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/projects.html'
	})
	.when('/projects', {
		templateUrl: 'partials/projects.html'
	})
	.when('/users', {
		templateUrl: 'partials/users.html'
	})
	.when('/teams', {
		templateUrl: 'partials/teams.html'
	})
	.when('/userclass', {
		templateUrl: 'partials/useclasses.html'
	})
	.when('/omega', {
		templateUrl: 'partials/omega.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})