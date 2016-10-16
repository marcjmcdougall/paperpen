app.service('notesService', function(){

	var self = this;

	this.notes = [];

	if(window.localStorage['notes']){

		this.notes = angular.fromJson(window.localStorage['notes']);		
	}

	this.add = function(item){

		console.log('Adding new item:\n');
		console.log(item);

		self.notes.push(item);
		save();
	}

	this.remove = function(item){

		self.notes.splice(notes.indexOf(item), 1);
		save();
	}

	var save = function(){

		window.localStorage['notes'] = angular.toJson(self.notes);	
	}
});