app.controller('MainController', ['$scope', function($scope) {

	$scope.hello = 'Hello, everyone!';

	$scope.notes = [

		{

			'id' : '0',
			'content' : 'This is my first note, see!',
			'priority' : 1
		},

		{

			'id' : '0',
			'content' : 'This is my second note, see!',
			'priority' : 1
		},

		{

			'id' : '0',
			'content' : 'This is my third note, see!',
			'priority' : 1
		},

		{

			'id' : '1',
			'content' : 'Praesent ac massa at ligula laoreet iaculis.',
			'priority' : 2
		},
		{

			'id' : '2',
			'content' : 'Praesent ac massa at ligula laoreet iaculis.',
			'priority' : 3
		}
	];

	$scope.remove = function(item){

		var index = $scope.notes.indexOf(item);
  		$scope.notes.splice(index, 1); 
	};

}]);