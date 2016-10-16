app.controller('MainController', ['$scope', function($scope) {

	var init = function(){

		if(window.localStorage['topNotes']){

			$scope.topNotes = angular.fromJson(window.localStorage['topNotes']);		
		}
		else{

			$scope.topNotes = [];
		}

		if(window.localStorage['mediumNotes']){

			$scope.mediumNotes = angular.fromJson(window.localStorage['mediumNotes']);		
		}
		else{

			$scope.mediumNotes = [];
		}

		if(window.localStorage['lowNotes']){

			$scope.lowNotes = angular.fromJson(window.localStorage['lowNotes']);		
		}
		else{

			$scope.lowNotes = [];
		}
	};

	// Init
	init();

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

		window.localStorage['topNotes'] = angular.toJson($scope.topNotes);
		window.localStorage['mediumNotes'] = angular.toJson($scope.mediumNotes);
		window.localStorage['lowNotes'] = angular.toJson($scope.lowNotes);
	}

	$scope.add = function(content, priority){

		var newNote = {'id' : '0', 'content' : content, 'priority' : priority};

		console.log('New Note: ' + newNote.content);		

		if(priority == 1){

			$scope.topNotes.push(newNote);
			$scope.tempNoteHigh.content = '';
			// $scope.$apply();

			$('#tempNoteMedium').val('');

		}
		else if(priority == 2){

			$scope.mediumNotes.push(newNote);
			$scope.tempNoteMedium.content = '';
		}
		else if(priority == 3){

			$scope.lowNotes.push(newNote);
			$scope.tempNoteLow.content = '';
		}
		else{

			// Something went wrong.
			console.log('Unknown priority value.');
		}
		
		save();
	}

	$scope.remove = function(item){

		if(item.priority == 1){

			var index = $scope.topNotes.indexOf(item);
  			$scope.topNotes.splice(index, 1); 
		}
		else if(item.priority == 2){

			var index = $scope.mediumNotes.indexOf(item);
  			$scope.mediumNotes.splice(index, 1); 
		}
		else if(item.priority == 3){

			var index = $scope.lowNotes.indexOf(item);
  			$scope.lowNotes.splice(index, 1); 
		}
		else{

			console.log('Unknown priority value.');
		}	

  		save();
	};

}]);