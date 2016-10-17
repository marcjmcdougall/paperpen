app.controller('MainController', ['$scope', 'notesService',  function($scope, notesService) {

	$scope.notes = notesService.notes;

	$scope.tempNote = {

		'id' : 0,
		'content' : '',
		'priority' : false
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

		// Pass it along to the service to manage.
		notesService.add(newNote);	
		resetTempNote();		
	};

	$scope.clear = function(){

		$scope.notes = [];
	}

	var update = function(){

		notesService.update($scope.notes);
	}

	var resetTempNote = function(){

		$scope.tempNote.content = '';
	}

}]);