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

	// This might be terribly inneficient.
	$scope.$watch('notes', function(){

		console.log('UPDATING');
		update();

	}, true);

	$scope.remove = function(item){

		// Pass it along to the service to manage.
		notesService.remove(item);
	};

	$scope.add = function(content, priority){

		var newNote = {

			'id' : 0,
			'content' : content,
			'priority' : priority
		};

		console.log('=====================');

		console.log('content: ' + content + ", priority: " + priority);

		console.log('Passing item now:');
		console.log(newNote);

		console.log('Scope item:');
		console.log($scope.tempNoteTop);

		// Pass it along to the service to manage.
		notesService.add(newNote);	
		resetTempNotes();
		
	};

	var update = function(){

		notesService.update($scope.notes);
	}

	var resetTempNotes = function(){

		$scope.tempNoteTop.content = '';
		$scope.tempNoteMedium.content = '';
		$scope.tempNoteBottom.content = '';	
	}

}]);