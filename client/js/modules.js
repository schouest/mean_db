var blackbelt_App = angular.module('blackbelt_App', ['ngRoute']);

blackbelt_App.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/alpha.html'
	})
	.when('/new_appointment', {
		templateUrl: 'partials/beta.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})