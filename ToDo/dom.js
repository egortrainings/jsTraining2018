const todoListDom = document.getElementById(`todo-items`).cloneNode(true);

const addTodoItemDom = todoItem => {
   
    let div = document.createElement(`div`);
    div.id = `todoId-${todoItem.id}`;
    div.className = `todoItem`;

    let idField = document.createElement(`input`);
    idField.type = `text`;
    idField.name = `id`;
    idField.disabled = true;
    idField.value = todoItem.id;
    
    div.appendChild(idField);
    
    let textField = document.createElement(`input`);
    textField.type = `text`;
    textField.name = `text`;
    textField.value = todoItem.text;
    
    div.appendChild(textField);
    
    let checkbox = document.createElement(`input`);
    checkbox.type = `checkbox`;
    checkbox.name = `isCompleted`;
    checkbox.checked = todoItem.completed;
    if (todoItem.completed) textField.style.backgroundColor = `red`;
    
    div.appendChild(checkbox);
    
    todoListDom.appendChild(div);
    viewTodoListDom();
    
    /*  
    // commented out - cannot fix bug: innerHTML not updating after steps: add1 -> edit1 -> add2. add1 stores old value in innerHTML
    let newTodo ='';
    if (todoItem.completed) {   
        newTodo = `<div id="todoId-${todoItem.id}" class="todoItem">
                    <input type="text" name="id" value="${todoItem.id}" disabled>
                    <input type="text" name="text" value="${todoItem.text}" style="background-color: red">
                    <input type="checkbox" name="isCompleted" checked>
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
    
    viewTodoListDom();
    */  
 
}

const viewTodoListDom = itemsType => {
    
    const displayedTodoListDom = document.getElementById(`todo-items`);
    let tempTodoListDom = todoListDom.cloneNode(false);
    let allTodoListDom = todoListDom.cloneNode(true);   
    
    switch (itemsType) {
        
        case 'completed':
            
            let checkedCheckboxes = allTodoListDom.querySelectorAll('input[type="checkbox"]:checked');
            checkedCheckboxes.forEach(checkedCheckbox => tempTodoListDom.appendChild(checkedCheckbox.parentNode));
            document.body.replaceChild(tempTodoListDom, displayedTodoListDom);
            break;

        case 'not_completed': 

            let uncheckedCheckboxes = allTodoListDom.querySelectorAll('input[type="checkbox"]:not(:checked)');
            uncheckedCheckboxes.forEach(uncheckedCheckbox => tempTodoListDom.appendChild(uncheckedCheckbox.parentNode));
            document.body.replaceChild(tempTodoListDom, displayedTodoListDom);
            break;
            
        default:
            
            tempTodoListDom = todoListDom.cloneNode(true);
            document.body.replaceChild(tempTodoListDom, displayedTodoListDom); 
            break;
    }

}

const editTodoItemDom = (todoItemId, newText) => {
    
    let todoDiv = todoListDom.querySelector(`#todoId-${todoItemId}`);
    todoListDom.querySelector(`#todoId-${todoItemId}`).children[1].value = newText;
    //console.log(todoListDom.innerHTML);
    
    viewTodoListDom();
}

const deleteTodoItemDom = todoItemId => {
    let todoDiv = todoListDom.querySelector(`#todoId-${todoItemId}`);
    todoListDom.removeChild(todoDiv);
    
    viewTodoListDom();
    
}

const completeTodoItemDom = todoItemId => {
    let todoDiv = todoListDom.querySelector(`#todoId-${todoItemId}`);
    todoDiv.children[2].checked = true; 
    todoDiv.children[1].style.backgroundColor = `red`;

    viewTodoListDom();
}

