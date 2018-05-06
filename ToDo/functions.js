const findTodoById = todoItemId => todoItems.filter(todoItem => todoItem.id === todoItemId)[0]; 

const isValidTodo = (todoItem, isEdit) => {
    if (!todoItem.text || todoItem.text === null || todoItem.text === '') {
        let err_msg = `Text cannot be empty`;
        return err_msg;
        }
    else {
        if (!todoItem.completed) {
        let err_msg = `Completed is required`;
        return err_msg;
        }
    
    else {
        if (!todoItem.id) {
        let err_msg = `Id is required`;
        return err_msg;
        }
    
    else {
        if ((findTodoById(todoItem.id)) && (!isEdit)) {
            let err_msg = `Id should be unique`;
            return err_msg;
        }
    
    else
        return true;
    }
    }
}
}

const addTodoItem = todoItem => {
    if (isValidTodo(todoItem) === true) {
        todoItems.push(todoItem);
        console.log(`New Todo added ${todoItem} . Todo list: ${todoItems}`);
        return true;
    } else {
        return (isValidTodo(todoItem));
    }
}

const viewTodoList = itemsType => {
    let tempTodoList = todoItems;
    switch (itemsType) {
        case 'completed':
            let completed_todos = todoItems.filter(todoItem => todoItem.completed === true );
            tempTodoList = completed_todos;
            break;

        case 'not_completed':
            let not_completed_todos = todoItems.filter(todoItem => todoItem.completed === false );
            tempTodoList = not_completed_todos;
            break;
            
        default:
            break;
    }
    
    return tempTodoList;
} 

const editTodoList = (todoItemId, newText) => {
    let todoItem = findTodoById(todoItemId);
    if (!todoItem) {
        console.log(`Todo item not found`);
        return false;
    } else {
        if (!newText) {
            console.log(`Text cannot be empty`);
            return false;
        }
        else {
        todoItem.text = newText;
        console.log(`Todo updated ${todoItem} . Todo list: ${todoItems}`);
        return true;
        }
    }                
}

const deleteTodoItem = todoItemId => {
    let todoItem = findTodoById(todoItemId);
    if (!todoItem) {
        console.log(`Todo item not found`);
        return false;
    } else {
        let index;
        todoItems.some = (element, i) => {
            if (element.id === todoItemId) {
                index = i;
                return true;
            }
        };
        todoItems.splice(index , 1);
        console.log(`Todo deleted ${todoItem} . Todo list: ${todoItems}`);
        return true;
    }
}

const completeTodoItem = todoItemId => {
    let todoItem = findTodoById(todoItemId);
    if (!todoItem) {
        console.log(`Todo item not found`);
        return false;
    } else {
        todoItem.completed = true;
        console.log(`Todo completed ${todoItem} . Todo list: ${todoItems}`);
        return true;
    }   
}