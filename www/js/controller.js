app.controller('myCtrl', ['$scope', function($scope){
	console.log('myCtrl ready');

	$scope.test = function(){
		alert('test button clicked');
	}

}]);
