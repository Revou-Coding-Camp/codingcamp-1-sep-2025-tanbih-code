let todoList = [];

function validateInput() {
    const todoInput = document.getElementById('todo-input').value;
    const todoDateInput = document.getElementById('todo-date-input').value;

    if (todoInput === '' || todoDateInput === '') {
        alert('Please fill in both the task and due date.');
    } else {
        addTodo(todoInput, todoDateInput);
    }
}

function addTodo(todo, dueDate) {
    const todoItem = {
        task: todo,
        dueDate: dueDate,
        completed: false
    };

    todoList.push(todoItem);

    renderTodoList();
}

function deleteAllTodo() {
    todoList = [];

    renderTodoList();
}

function filterTodo() {
    todoList = [];

    renderTodoList();

}

function renderTodoList() {
    const todoListContainer = document.getElementById('todo-list');
    todoListContainer.innerHTML = ''; 

    todoList.forEach((item) => {
        todoListContainer.innerHTML += `
            <p>${item.task} - Due: ${item.dueDate}</p>
        `;
    });
}