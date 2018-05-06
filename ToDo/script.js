let todoItems = [];

initToDos = function() {
		$.getJSON( "todos.json", function(data) {
			todoItems = data.data;
		});
	};
    
initToDos();