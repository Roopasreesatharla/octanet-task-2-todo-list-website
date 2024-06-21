document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo');
        const listItem = document.createElement('li');
        listItem.innerText = todoText;
        todoItem.appendChild(listItem);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', () => {
            todoItem.remove();
        });
        todoItem.appendChild(deleteButton);

        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });
        todoItem.appendChild(checkButton);

        todoList.appendChild(todoItem);
    }
});
