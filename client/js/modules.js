var my_App = angular.module('my_App', ['ngRoute','ui.materialize']);

my_App.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/alpha.html'
	})
	.when('/userclass', {
		templateUrl: 'partials/useclasses.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})