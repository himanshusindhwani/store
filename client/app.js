var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'ProductsController',
		templateUrl: 'views/products.html'
	})
	.when('/products', {
		controller:'ProductsController',
		templateUrl: 'views/products.html'
	})
	.when('/products/details/:id',{
		controller:'ProductsController',
		templateUrl: 'views/product_details.html'
	})
	.when('/products/add',{
		controller:'ProductsController',
		templateUrl: 'views/add_product.html'
	})
	.when('/products/edit/:id',{
		controller:'ProductsController',
		templateUrl: 'views/edit_product.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});