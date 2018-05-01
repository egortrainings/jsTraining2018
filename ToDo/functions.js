function findTodoById(todoItemId) {
    return todoItems.filter(function(todoItem) {
        return todoItem.id === todoItemId;        
    })[0]; 
}

function isValidTodo(todoItem, isEdit) {
    console.log(todoItem);
    if (todoItem.text === null || todoItem.text === '') {
        var err_msg = 'Text cannot be empty';
        return err_msg;
        }
    else {
        if (todoItem.completed === null) {
        var err_msg = 'Completed is required';
        return err_msg;
        }
    
    else {
        if (!todoItem.id) {
        var err_msg = 'Id is required';
        return err_msg;
        }
    
    else {
        if ((findTodoById(todoItem.id)) && (!isEdit)) {
            var err_msg = 'Id should be unique';
            return err_msg;
        }
    
    else
        return true;
    }
    }
}
}

function addTodoItem(todoItem) {
    if (isValidTodo(todoItem)) {
        todoItems.push(todoItem);
        return true;
    }
    return (isValidTodo(todoItem));
}

function viewTodoList(itemsType) {
    var tempTodoList = todoItems;
    switch (itemsType) {
        case 'completed':
            var completed_todos = todoItems.filter(function(todoItem) {
            return todoItem.completed === true;
            });
            //console.log(completed_todos);
            tempTodoList = completed_todos;
            break;

        case 'not_completed':
            var not_completed_todos = todoItems.filter(function(todoItem) {
            return todoItem.completed === false;
            });
            //console.log(not_completed_todos);
            tempTodoList = not_completed_todos;
            break;
            
        default:
            //console.log(todoItems);
            break;
    }
    
    return tempTodoList;
} 

function editTodoList(todoItemId, newText) {
    var todoItem = findTodoById(todoItemId);
    if (!todoItem) {
        console.log('Todo item not found');
        return false;
    } else {
        if (!newText) {
            console.log('Text cannot be empty');
            return false;
        }
        else {
        todoItem.text = newText;
        return true;
        }
    }                
}

function deleteTodoItem(todoItemId) {
    var todoItem = findTodoById(todoItemId);
    if (!todoItem) {
        console.log('Todo item not found');
        return false;
    } else {
        var index;
        todoItems.some(function (element, i) {
            if (element.id === todoItemId) {
                index = i;
                return true;
            }
        });
        todoItems.splice(index , 1);
        console.log(todoItems);
        console.log(index);
        return true;
    }
}

function completeTodoItem(todoItemId) {
    var todoItem = findTodoById(todoItemId);
    if (!todoItem) {
        console.log('Todo item not found');
        return false;
    } else {
        todoItem.completed = true;
        return true;
    }   
}