const todoListDom = document.getElementById('todo-items');

const viewTodoListDom = todoItems => {
    
    todoListDom.innerHTML = '';
    for (let i = 0; i < todoItems.length; i++) {
    let newTodo =''; 
    if (todoItems[i].completed) {   
        newTodo = `<div id="${todoItems[i].id}" class="todoItem">
                    <input type="text" name="id" value="${todoItems[i].id}" disabled>
                    <input type="text" name="text" value="${todoItems[i].text}" style="background-color: red">
                    <input type="checkbox" name="isCompleted" checked disabled>
                    <button name="deleteBtn" type="button">delete</button>
                    <button name="updateBtn" type="button">update</button>
                    </div>`
    }
    else {
        newTodo = `<div id="${todoItems[i].id}" class="todoItem">
                    <input type="text" name="id" value="${todoItems[i].id}" disabled>
                    <input type="text" name="text" value="${todoItems[i].text}">
                    <input type="checkbox" name="isCompleted">
                    <button name="deleteBtn" type="button">delete</button>
                    <button name="updateBtn" type="button">update</button>
                    </div>`    
    }
    todoListDom.innerHTML += newTodo;
    }
    

}

const addTodoItemDom = todoItem => {
   

    let newTodo ='';
    if (todoItem.completed) {   
        newTodo = `<div id="${todoItem.id}" class="todoItem">
                    <input type="text" name="id" value="${todoItem.id}" disabled>
                    <input type="text" name="text" value="${todoItem.text}" style="background-color: red">
                    <input type="checkbox" name="isCompleted" checked disabled>
                    <button name="deleteBtn" type="button">delete</button>
                    <button name="updateBtn" type="button">update</button>
                    </div>`
    }
    else {
        newTodo = `<div id="${todoItem.id}" class="todoItem">
                    <input type="text" name="id" value="${todoItem.id}" disabled>
                    <input type="text" name="text" value="${todoItem.text}">
                    <input type="checkbox" name="isCompleted">
                    <button name="deleteBtn" type="button">delete</button>
                    <button name="updateBtn" type="button">update</button>
                    </div>`    
    }
    todoListDom.innerHTML += newTodo;
}

const editTodoItemDom = (todoItemId, newText) => {

    document.getElementById(todoItemId).querySelector('input[name="text"]').value = newText;
}

const deleteTodoItemDom = todoItemId => {

    todoListDom.removeChild(document.getElementById(todoItemId));
    
}

const completeTodoItemDom = todoItemId => {
    
    let todoDiv = document.getElementById(todoItemId);
    
    todoDiv.querySelector('input[name="text"]').style.backgroundColor = 'red';
    todoDiv.querySelector('input[name="isCompleted"]').checked = true;
    todoDiv.querySelector('input[name="isCompleted"]').disabled = true;  

}



