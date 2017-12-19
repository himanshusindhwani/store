var myApp = angular.module('myApp');

myApp.controller('ProductsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ProductsController loaded...');

	$scope.getProducts = function(){
		$http.get('/api/products').success(function(response){
			$scope.products = response;
		});
	}

	$scope.getProduct = function(){
		var id = $routeParams.id;
		$http.get('/api/products/'+id).success(function(response){
			$scope.product = response;
		});
	}

	$scope.addProduct = function(){
		console.log($scope.product);
		$http.post('/api/products/', $scope.product).success(function(response){
			window.location.href='#/products';
		});
	}

	$scope.updateProduct = function(){
		var id = $routeParams.id;
		$http.put('/api/products/'+id, $scope.product).success(function(response){
			window.location.href='#/products';
		});
	}

	$scope.removeProduct = function(id){
		$http.delete('/api/products/'+id).success(function(response){
			window.location.href='#/products';
		});
	}
}]);