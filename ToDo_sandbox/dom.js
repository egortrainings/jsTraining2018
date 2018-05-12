const todoListDom = document.getElementById(`todo-items`);

const viewTodoListDom = todoItems => {
    
    todoListDom.innerHTML = '';
    for (let i = 0; i < todoItems.length; i++) {
    let newTodo =''; 
    if (todoItems[i].completed) {   
        newTodo = `<div id="todoId-${todoItems[i].id}" class="todoItem">
                    <input type="text" name="id" value="${todoItems[i].id}" disabled>
                    <input type="text" name="text" value="${todoItems[i].text}" style="background-color: red">
                    <input type="checkbox" name="isCompleted" checked disabled>
                    </div>`
    }
    else {
        newTodo = `<div id="todoId-${todoItems[i].id}" class="todoItem">
                    <input type="text" name="id" value="${todoItems[i].id}" disabled>
                    <input type="text" name="text" value="${todoItems[i].text}">
                    <input type="checkbox" name="isCompleted">
                    </div>`    
    }
    todoListDom.innerHTML += newTodo;
    }
    

}

const addTodoItemDom = todoItem => {
   

    let newTodo ='';
    if (todoItem.completed) {   
        newTodo = `<div id="todoId-${todoItem.id}" class="todoItem">
                    <input type="text" name="id" value="${todoItem.id}" disabled>
                    <input type="text" name="text" value="${todoItem.text}" style="background-color: red">
                    <input type="checkbox" name="isCompleted" checked disabled>
                    </div>`
    }
    else {
        newTodo = `<div id="todoId-${todoItem.id}" class="todoItem">
                    <input type="text" name="id" value="${todoItem.id}" disabled>
                    <input type="text" name="text" value="${todoItem.text}">
                    <input type="checkbox" name="isCompleted">
                    </div>`    
    }
    todoListDom.innerHTML += newTodo;
}

const editTodoItemDom = (todoItemId, newText) => {

    todoListDom.querySelector(`#todoId-${todoItemId}`).querySelector('input[name="text"]').value = newText;
}

const deleteTodoItemDom = todoItemId => {

    todoListDom.removeChild(todoListDom.querySelector(`#todoId-${todoItemId}`));
    
}

const completeTodoItemDom = todoItemId => {
    
    let todoDiv = todoListDom.querySelector(`#todoId-${todoItemId}`);
    
    todoDiv.querySelector('input[name="text"]').style.backgroundColor = `red`;
    todoDiv.querySelector('input[name="isCompleted"]').checked = true;
    todoDiv.querySelector('input[name="isCompleted"]').disabled = true;  

}