var formApp = angular.module('formApp',[]);

formApp.controller('FormCtrl', ['$scope', function($scope) {
	$scope.title = 'BookWeb';

	$scope.books = [
		{name:'Harry Potter i Kamień Filozoficzny'},
		{name:'Design dla Hackerów'}
	];

	$scope.addBook = function () {
		$scope.books.push({name:$scope.bookName});
		$scope.bookName = '';
	}

}]);
