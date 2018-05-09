/*
//create some Todos
addTodoItem({id: 1, text: "Text 1", completed: false});
addTodoItem({id: 2, text: "Text 2", completed: false});
addTodoItem({id: 3, text: "Text 3", completed: true});
addTodoItem({id: 4, text: "Text 4", completed: false});
addTodoItem({id: 5, text: "Text 5", completed: false});

// verify validations:
addTodoItem({id: null, text: "Empty id", completed: false}); // empty id
addTodoItem({id: 1, completed: false}); // empty text
addTodoItem({id: 99, text: "text", completed: null}); // empty flag
addTodoItem({id: 5, text: "Text 5", completed: false}); // create with existing Id

//verify Edit
editTodoItem(5, "Text 5 updated");

//verify Edit validations:
editTodoItem(null, "Text 5 updated"); //id is empty
editTodoItem(5, ""); //text is empty
editTodoItem(9999, "Text 5 updated"); //id not found

//verify delete:
deleteTodoItem(4);
deleteTodoItem(9999); //id not found

//verify complete:
completeTodoItem(1);
completeTodoItem(9999); //id not found

//view Todos
viewTodoList('completed'); //completed
viewTodoList('not_completed'); //not_completed
viewTodoList('all'); //all

*/
