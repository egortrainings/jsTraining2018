let todoItems = [];

let initTodoItems = function() {
		$.getJSON( "todos.json", function(data) {
			todoItems = data.data;
            viewTodoList();
		});
	};

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
    
    viewTodoListDom(tempTodoList);
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
        editTodoItemDom(todoItemId, newText);
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


function initPageElements() {
    console.log('initPageElements');
    const allBtn = document.getElementById('allBtn');
    const completedBtn = document.getElementById('completedBtn');
    const notCompletedBtn = document.getElementById('notCompletedBtn');

    allBtn.onclick = allBtnHandler;
    function allBtnHandler() { viewTodoList('all') };

    completedBtn.onclick = completedBtnHandler;
    function completedBtnHandler() { viewTodoList('completed')  };
    
    notCompletedBtn.onclick = notCompletedBtnHandler;
    function notCompletedBtnHandler() { viewTodoList('not_completed') };
    
    
    const newTodoTextInput = document.getElementById('newTodoInput');
    const newTodoBtn = document.getElementById('newTodoBtn');
    newTodoBtn.onclick = addToDoHandler;
    
    newTodoTextInput.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            newTodoBtn.click();
        }
    });
    
    const todoDiv = document.getElementById('todo-items');
    todoDiv.addEventListener('click', function(event) {
        if(event.target.name == 'isCompleted'){
            completeTodoItem(parseInt(event.target.parentNode.id));
        }
        if(event.target.name == 'deleteBtn'){
            deleteTodoItem(parseInt(event.target.parentNode.id));
        }
        
        if(event.target.name == 'updateBtn'){
            editTodoItem(parseInt(event.target.parentNode.id), event.target.parentNode.querySelector('input[name="text"]').value);
        }
    })
    
    
}


function getNewId() {
    let id = 1;
    if (todoItems.length > 0) {
            todoItemMaxId = todoItems.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current
            })
            id = todoItemMaxId.id + 1;
    }
    return id;
    
    
}

function addToDoHandler () {
    let newTodoText = document.getElementById('newTodoInput').value;
    let id = getNewId();
    let newTodoItem = {id: id, 
                       text: newTodoText, 
                       completed: false};
    
    addTodoItem(newTodoItem);
}
    








