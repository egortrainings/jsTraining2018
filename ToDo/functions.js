const findTodoById = todoItemId => (todoItems.filter(todoItem => todoItem.id === todoItemId)[0]); 

const isValidTodo = (todoItem, isEdit) => {
    if (!todoItem.text || todoItem.text === null || todoItem.text === '') {
        let err_msg = `Text cannot be empty`;
        return err_msg;
        }
    else {
        if (todoItem.completed === null || todoItem.completed === '') {
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
        addTodoItemDom(todoItem);
        console.log(`New Todo added ${JSON.stringify(todoItem)} . Todo list: ${JSON.stringify(todoItems)}`);
        return true;
    } else {
        return (isValidTodo(todoItem));
    }
}

const viewTodoList = itemsType => {
    let tempTodoList = todoItems.slice();
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
    
    viewTodoListDom(itemsType);
    return tempTodoList;
} 

const editTodoItem = (todoItemId, newText) => {
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
        editTodoItemDom(todoItemId,newText);
        console.log(`Todo updated ${JSON.stringify(todoItem)} . Todo list: ${JSON.stringify(todoItems)}`);
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
        todoItems.some( (element, i) => {
            if (element.id === todoItemId) {
                index = i;
                return true;
            }
        });
        todoItems.splice(index , 1);
        deleteTodoItemDom(todoItemId);
        console.log(`Todo deleted ${JSON.stringify(todoItem)} . Todo list: ${JSON.stringify(todoItems)}`);
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
        completeTodoItemDom(todoItemId);
        console.log(`Todo completed ${JSON.stringify(todoItem)} . Todo list: ${JSON.stringify(todoItems)}`);
        return true;
    }   
}

