app.controller('MainController', ['$scope', function($scope) {

	$scope.hello = 'Hello, everyone!';

	$scope.notes = [

		{

			'id' : '0',
			'content' : 'This is my first note, see!',
			'priority' : 3
		},

		{

			'id' : '1',
			'content' : 'Ut non enim eleifend felis pretium feugiat. Aenean vulputate eleifend tellus. Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros, sed gravida augue augue mollis justo. Vivamus consectetuer hendrerit lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.  Maecenas malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquam ultrices mauris. Nulla sit amet est. Fusce vulputate eleifend sapien.',
			'priority' : 3
		},
		{

			'id' : '2',
			'content' : 'Phasellus gravida semper nisi. Donec venenatis vulputate lorem. Proin faucibus arcu quis ante. Morbi mattis ullamcorper velit.',
			'priority' : 3
		}
	];
}]);