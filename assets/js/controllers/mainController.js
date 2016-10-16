app.controller('MainController', ['$scope', function($scope) {

	// Init
	if(window.localStorage['notes']){

		$scope.notes = angular.fromJson(window.localStorage['notes']);		
	}
	else{

		$scope.notes = [];
	}

	$scope.tempNoteHigh  = {

		'id' : '0',
		'content' : '',
		'priority' : 1
	};

	$scope.tempNoteMedium  = {

		'id' : '0',
		'content' : '',
		'priority' : 2
	};

	$scope.tempNoteLow  = {

		'id' : '0',
		'content' : '',
		'priority' : 3
	};

	var save = function(){

		window.localStorage['notes'] = angular.toJson($scope.notes);
	}

	$scope.add = function(content, priority){

		var newNote = {'id' : '0', 'content' : content, 'priority' : priority};

		console.log('New Note: ' + newNote.content);

		$scope.notes.push(newNote);

		if(priority == 1){

			console.log('Resetting priority 1 now.');

			$scope.tempNoteHigh.content = '';
		}
		else if(priority == 2){

			$scope.tempNoteMedium.content = '';
		}
		else if(priority == 3){

			// $('#input-3').html('');
			$scope.tempNoteLow.content = '';
		}
		else{

			// Something went wrong.
			console.log('Unknown priority value.');
		}
		
		save();
	}

	$scope.remove = function(item){

		var index = $scope.notes.indexOf(item);
  		$scope.notes.splice(index, 1); 

  		save();
	};

	// console.log($scope.tempNoteLow);

}]);