const todoListDom = document.getElementById(`todo-items`);

const viewTodoListDom = todoItems => {
    
    todoListDom.innerHTML = '';
    for (let i = 0; i < todoItems.length; i++) {
    let newTodo =''; 
    if (todoItems[i].completed) {   
        newTodo = `<div id="todoId-${todoItems[i].id}" class="todoItem">
                    <input type="text" name="id" value="${todoItems[i].id}" disabled>
                    <input type="text" name="text" value="${todoItems[i].text}" style="background-color: red">
                    <input type="checkbox" name="isCompleted" checked>
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
