app.controller('MainController', ['$scope', 'notesService',  function($scope, notesService) {

	$scope.notes = notesService.notes;

	$scope.tempNoteTop = {

		'id' : 0,
		'content' : '',
		'priority' : 1
	};

	$scope.tempNoteMedium = {

		'id' : 0,
		'content' : '',
		'priority' : 1
	};

	$scope.tempNoteLow = {

		'id' : 0,
		'content' : '',
		'priority' : 1
	};

	$scope.remove = function(item){

		// Pass it along to the service to manage.
		notesService.remove(item);
	};

	$scope.add = function(item){

		console.log('Passing item now:');
		console.log(item);

		console.log('Scope item:');
		console.log($scope.tempNoteTop);

		// Pass it along to the service to manage.
		notesService.add(item);		
	};

}]);