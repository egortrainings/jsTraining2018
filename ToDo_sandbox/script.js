let todoItems = [];

let initTodoItems = function() {
		$.getJSON( "todos.json", function(data) {
			todoItems = data.data;
		});
	};

initTodoItems();